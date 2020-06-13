import React from "react";
import Head from "next/head";

function PoliceTracker() {
  return (
    <>
      <Head>
        <title>policetracker.link</title>
        <link
          rel="stylesheet"
          href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
        />
      </Head>
      <div className="container">
        <div className="jumbotron">
          <h1>
            APIs available for pulling police shootings and police brutality
          </h1>

          <h3>/api/shootings will return all records in our DB</h3>
          <h3>{"/api/shootings/{id} will return just record number id"}</h3>
          <h3>
            {"/api/shootings/{id1}-{id2} will return records from id1 to id2"}
          </h3>
          <h3>
            /api/shootings/last20 will return the last (most recent) 20 records
          </h3>

          <h2>Future functionality will also include police brutality data</h2>
        </div>
      </div>
    </>
  );
}

export default PoliceTracker;
