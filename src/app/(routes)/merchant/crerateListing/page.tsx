"use client";

import React, { useState } from "react";
import UploadPhotos from "./components/UploadPhotos";
import Amenities from "./components/Amenities";
import Description from "./components/Description";
import Highlights from "./components/Highlights";
import Heading from "./components/Heading";
import DealOptionsBuilder from "./components/DealOptionsBuilder";

const initialDealOption = {
  id: Date.now().toString() + Math.random(),
  title: "",
  originalPrice: "",
  discountPercentage: "",
  discountedPrice: "",
  finalPrice: "",
  extraOffer: "",
  finalDiscountedPrice: "",
  codeInfo: "",
  purchaseInfo: "",
  giftIcon: false,
};

const CreateListing = () => {
  const [dealOptions, setDealOptions] = useState([initialDealOption]);

  return (
    <>
      <Heading 
        title="Create Your Listing" 
        subtitle="Fill in the details below to showcase your business and attract more customers."
      />
      <Description />
      <Highlights />
      <Amenities />
      <DealOptionsBuilder value={dealOptions} onChange={setDealOptions} />
      <UploadPhotos />
    </>
  );
};

export default CreateListing;