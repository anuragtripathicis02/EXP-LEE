import Image from "next/image";
import styles from "./page.module.css";

import Splash from "../../public/images/splash-screen.png";
import LogoSplash from "../../public/images/mobile-log-splash.png";

export default function Home() {
  return (
    <div className="my-splash">
      <main className="splash-main text-center">
        <div className="logo-splash-mobile d-md-none">
          <Image src={LogoSplash} alt=""/>
          <p className="mb-0">From Dream to Direction</p>
        </div>
        <div className="splash-box d-none d-md-block">
          <Image src={Splash} alt="" />
        </div>
        <div className="splash-loading d-none d-md-flex">
          <h2 className="loading-text mb-0">Loading...</h2>
          <div className="loader-box">
            <div className="loader">
              <div className="gear">
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="core"></div>
              </div>
            </div>
            <div className="loader">
              <div className="gear">
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="tooth"></div>
                <div className="core"></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
