import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import RegForm from "../components/RegForm";
import Footer from "../components/Footer";
import DataDisplay from "../components/DataDisplay";

export default function Home() {
  useEffect(() => {
    axios
      .get("/api/coldstart")
      .catch((err) => console.log("initiated coldstart"));
  });

  const [data, setData] = useState(null);
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(null);

  const invokeError = (err) => {
    setStatus(null);
    setError(err);
  };

  return (
    <>
      {!data && (
        <div>
          <Loading status={status}></Loading>
          <RegForm
            setData={setData}
            setStatus={setStatus}
            status={status}
            setError={invokeError}
          />
        </div>
      )}
      {data && <DataDisplay data={data} />}
      <Footer></Footer>
    </>
  );
}
