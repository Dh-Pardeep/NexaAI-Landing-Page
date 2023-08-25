import React, { useEffect, useState } from "react";
function LoaderHome() {
  const [loder, setloader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloader(false);
    }, 3500);
  }, []);
  {
    if (loder === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "initial";
    }
  }
  return (
    <>
      {loder ? (
        <section
          style={{ zIndex: "999999999" }}
          className="bg-black top-0 start-0 position-fixed h-100 w-100 d-flex flex-column justify-content-center align-items-center"
        >
          <div className="d-flex justify-content-center align-items-center flex-column text-center">
            <div className="loader">
              <span className="ff_raleway cursor_pointer fs_3xl text_stone fw_bold">
                Bit<span className="text_primary">Blue</span>
              </span>
            </div>
          </div>
        </section>
      ) : (
        ""
      )}
    </>
  );
}

export default LoaderHome;