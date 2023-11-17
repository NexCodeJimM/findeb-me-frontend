"use client";
import { useParams } from "next/navigation";

const ClientPage = () => {
  const { id } = useParams();
  return <div>ClientPage</div>;
};

export default ClientPage;
