import React from "react";
import { ProductDetails } from "../../Types/ProjectTypes";
import Detail from "../detail/Detail";

export default function Details({ PO, invoice, size }: ProductDetails) {
  return (
    <div className="details" style={{ display: "flex", gap: "22px" }}>
      {PO && <Detail fieldName="PO" value={PO} />}
      {invoice && <Detail fieldName="Invoice" value={invoice} />}
      {size && <Detail fieldName="Size" value={size} />}
    </div>
  );
}
