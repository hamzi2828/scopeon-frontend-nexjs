export default function BlogDetailLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="min-h-screen bg-gray-50">
            {children}
        </main>
    );
}
