import { NextRequest, NextResponse } from 'next/server';

// Minimal JWT decode for Edge (no Buffer in Edge runtime)
type JwtUser = {
  _id?: string;
  id?: string;
  fullname?: string;
  email?: string;
  businessName?: string;
  businessAddress?: string;
  phoneNumber?: string;
  website?: string;
  businessType?: string;
  userType?: string;
  createdAt?: string;
  updatedAt?: string;
  __v?: number;
  iat?: number;
  exp?: number;
};

function decodeJwt(token: string): JwtUser | null {
  try {
    const payload = token.split('.')[1];
    // atob is available in Edge runtime
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  } catch {
    return null;
  }
}

export function middleware(request: NextRequest) {
  const { pathname } = new URL(request.url);
  const token = request.cookies.get('token')?.value;

  // Merchant route protection
  if (pathname.startsWith('/merchant')) {
    if (!token) {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
    const user = decodeJwt(token);
    if (!user || user.userType !== 'merchant') {
      return NextResponse.redirect(new URL('/signin', request.url));
    }
    // Allow merchant
    return NextResponse.next();
  }

  // Add more route protections here (e.g., for /admin, /customer)
  // Example for admin:
  // if (pathname.startsWith('/admin')) {
  //   if (!token) return NextResponse.redirect(new URL('/signin', request.url));
  //   const user = decodeJwt(token);
  //   if (!user || user.userType !== 'admin') {
  //     return NextResponse.redirect(new URL('/signin', request.url));
  //   }
  //   return NextResponse.next();
  // }

  // Default: allow
  return NextResponse.next();
}

// Apply globally
export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};
