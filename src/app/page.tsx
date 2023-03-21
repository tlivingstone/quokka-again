import Company from "./components/Company";
import companies from "./data/Companies";
import { useState } from "react";
import Head from "next/head";

export default function Index() {
  return (
      <>
      <Head>
          <title>Quokka</title>
          <meta name= "Quokka" content="Investments"/>
      </Head>

      <div id = "container">

      <div id = "top-section">
          <>
              <h2>Quokka Ventures</h2>
              <p className = "description">
                  We back founders who set out to do the impossible. Your can join our <a href="https://angellist.com/s/vishnu-srinivasan/zu19W" className="underline1">Angellist</a> syndicate to stay up to date
                  on deal opportunities.
              </p>

              <p className="social-links">
                  <a href = "https://www.linkedin.com/in/taryn-e-livingstone/"> <span className="underline">Taryn </span>&#x2197;</a> 
                  <a href = "https://www.linkedin.com/in/vishnu-s-857aa8132/"> <span className="underline">Vishnu </span>&#x2197;</a> 
              </p>
              </>

              <h2>Select Prior GP Investments</h2>
                  <div className = "flex">
                  {companies.map(d => (
                      <Company key="1"
                          name={d.name}
                          description={d.description}
                          link={d.link}
                          />
                  ))}
                  </div>

          </div>

      </div>
      </>
  );
}
