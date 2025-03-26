import React, { useEffect } from "react";
import nature from "/src/assets/images/nature.jpg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#About",
      start: "top 25%",
      end: "bottom 70%",
      onEnter: () => {
        gsap.to(".About", {
          opacity: 1,

          duration: 0.5,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to(".About", {
          opacity: 0,

          duration: 0.5,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#Projects",
      start: "top 60%",
      end: "bottom 60%",
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".rightcontainer", {
          color: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".resumebtn", {
          backgroundColor: "#ffffff",
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to("body", {
          backgroundColor: "#eaece5",
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".rightcontainer", {
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".resumebtn", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  // CONTACT

  useEffect(() => {
    ScrollTrigger.create({
      trigger: "#Contact",
      start: "top 60%",
      end: "bottom 60%",
      onEnter: () => {
        gsap.to("body", {
          backgroundColor: "#eaece5",
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".rightcontainer", {
          color: "#000000",
          duration: 0.5,
          ease: "power1.inOut",
        });
        gsap.to(".resumebtn", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.5,
          ease: "power1.inOut",
        });
      },
      onLeaveBack: () => {
        gsap.to("body", {
          backgroundColor: "#1e1e1e",
          color: "#ffffff",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to("#Logos", {
          fill: "#ffffff",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to(".rightcontainer", {
          color: "#ffffff",
          duration: 0.2,
          ease: "power1.inOut",
        });
        gsap.to(".resumebtn", {
          backgroundColor: "#ffffff",
          color: "#000000",
          duration: 0.2,
          ease: "power1.inOut",
        });
      },
    });
  }, []);

  return (
    <section
      id="About"
      className="About flex justify-center items-center h-screen w-full relative z-0"
      style={{ scrollMarginTop: "0px" }} // Fix for proper anchor scrolling
    >
      <div className="leftcontainer flex-1 w-1/2 h-full">
        <img
          className="h-full w-full p-20 object-cover"
          src={nature}
          alt="Nature"
        />
      </div>

      <div className="rightcontainer w-1/2 h-full flex flex-col justify-center items-start p-10">
        <div className="about-title grid text-stone-900 tracking-widest">
          <h1 className="text-8xl font-gambarino font-black tracking-wider text-center pb-5">
            jessica
          </h1>
        </div>

        <div className="viet whitespace-nowrap flex justify-center gap-y-20 items-center pb-10">
          <h2 className="text-2xl font-courier font-bold">[jeh-see-cuh]</h2>
          <p className="font-bold text-lg">• Vietnamese</p>
        </div>

        <div className="info">
          <p className="text-3xl text-start leading-relaxed pb-10">
            Hi! I'm a 2nd year majoring in Computer Science with a passion for
            technology and creativity. I'm excited about exploring the world of
            programming, web development, and digital design. I love capturing
            moments and turning them into stories through photography and
            videography. Feel free to explore my work, and please reach out to
            connect!
          </p>
        </div>

        <div className="techstack">
          <ul className="flex flex-row justify-center gap-x-5">
            <li>
              {/* java */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_138_21)">
                  <path
                    d="M31.905 29.2273C32.8054 28.6117 34.0549 28.0789 34.0549 28.0789C34.0549 28.0789 30.4994 28.722 26.9622 29.016C22.635 29.3743 17.9861 29.4478 15.6526 29.1354C10.1309 28.4004 18.6844 26.37 18.6844 26.37C18.6844 26.37 15.3677 26.1495 11.2794 28.1156C6.45599 30.4492 23.223 31.5149 31.905 29.2273ZM24.059 26.2781C22.3134 22.3551 16.4243 18.9099 24.059 12.8829C33.5826 5.36767 28.6986 0.47998 28.6986 0.47998C30.6739 8.24332 21.753 10.5953 18.5282 15.4187C16.3324 18.7169 19.6031 22.2541 24.059 26.2781ZM34.5877 10.09C34.5969 10.09 18.4915 14.1141 26.1813 22.9707C28.4506 25.5799 25.5841 27.9319 25.5841 27.9319C25.5841 27.9319 31.3446 24.9552 28.6986 21.2343C26.2272 17.7614 24.3346 16.0342 34.5877 10.09ZM34.0273 34.9418C33.9771 35.0294 33.9153 35.1097 33.8436 35.1807C45.631 32.0846 41.2945 24.2569 35.6627 26.2414C35.3585 26.3532 35.0957 26.5551 34.9093 26.8202C35.2382 26.7012 35.5761 26.609 35.9199 26.5446C38.768 25.9474 42.8564 30.3573 34.0273 34.9418ZM38.3601 40.6656C38.3601 40.6656 39.6922 41.7589 36.8993 42.6133C31.5798 44.2211 14.7761 44.708 10.1089 42.6776C8.4276 41.9518 11.5789 40.932 12.5711 40.7207C13.6001 40.5002 14.1973 40.537 14.1973 40.537C12.3322 39.2232 2.13424 43.1186 9.01559 44.2303C27.7799 47.2805 43.2294 42.8614 38.3601 40.6656ZM17.8208 36.862C10.5903 38.8832 22.2215 43.0543 31.4273 39.1129C30.5295 38.7641 29.6628 38.34 28.8364 37.845C24.7297 38.626 22.8279 38.6811 19.0978 38.2585C16.02 37.9094 17.8208 36.862 17.8208 36.862ZM34.3397 45.7921C27.1092 47.1519 18.1883 46.9957 12.9055 46.1229C12.9055 46.1137 13.9896 47.0141 19.5572 47.3724C28.028 47.9144 41.0373 47.0692 41.3405 43.0635C41.3405 43.0635 40.7525 44.5794 34.3397 45.7921ZM30.334 32.9114C24.8951 33.9588 21.7438 33.9312 17.7657 33.5178C14.6879 33.1962 16.6999 31.7079 16.6999 31.7079C8.72527 34.3538 21.1282 37.3489 32.2725 34.0874C31.5523 33.8331 30.8923 33.4327 30.334 32.9114Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_138_21">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </li>
            <li>
              {/* python */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_136_6)">
                  <path
                    d="M28.4776 0.35975L30.2686 0.759701L31.7214 1.27984L32.8955 1.87977L33.791 2.51989L34.4676 3.19981L34.9651 3.87972L35.2835 4.53975L35.4827 5.13988L35.5622 5.65981L35.602 6.05976L35.582 6.31983V16.9999L35.4824 18.2599L35.2239 19.3599L34.8059 20.2799L34.2886 21.0399L33.6914 21.6599L33.0347 22.1599L32.3382 22.54L31.6418 22.8199L30.9851 23.0199L30.388 23.16L29.8706 23.24L29.4527 23.28H17.572L16.199 23.3799L15.0249 23.6598L14.0298 24.1L13.2139 24.6398L12.5571 25.2799L12.02 25.98L11.6218 26.6999L11.3235 27.4399L11.1245 28.1399L10.9851 28.7798L10.9055 29.3199L10.8657 29.7399V35.86H6.42776L6.01 35.7999L5.45265 35.66L4.81592 35.42L4.11939 35.0599L3.40306 34.5399L2.68653 33.82L1.99 32.8999L1.35327 31.72L0.796122 30.26L0.378163 28.4999L0.0995918 26.4L0 23.94L0.119388 21.4999L0.437755 19.42L0.91551 17.6799L1.55224 16.2599L2.26857 15.12L3.06469 14.2399L3.90041 13.5799L4.73633 13.0999L5.53224 12.78L6.24878 12.58L6.88551 12.4799L7.36327 12.46H7.68163L7.80102 12.4799H24.0398V10.82H12.418L12.398 5.31996L12.3582 4.57995L12.4578 3.89982L12.6765 3.2798L13.0149 2.71987L13.5124 2.19993L14.1294 1.73989L14.8855 1.33994L15.7612 0.979981L16.7761 0.679916L17.9304 0.439946L19.2039 0.23997L20.6169 0.119985L22.1492 0.0399951L23.8208 0L26.3482 0.0998851L28.4776 0.35975ZM15.9402 4.31987L15.4827 4.9799L15.3235 5.7999L15.4827 6.6199L15.9402 7.29981L16.5969 7.73976L17.4129 7.91984L18.2288 7.73976L18.8855 7.29981L19.3433 6.6199L19.5024 5.7999L19.3433 4.9799L18.8855 4.31987L18.2288 3.87972L17.4129 3.69985L16.5969 3.87972L15.9402 4.31987ZM41.99 12.2198L42.5473 12.3398L43.1841 12.5798L43.8806 12.9399L44.5969 13.4798L45.3135 14.1798L46.01 15.1198L46.6467 16.2999L47.2039 17.7598L47.6218 19.5198L47.9004 21.5998L48 24.0598L47.8806 26.5198L47.5622 28.5999L47.0845 30.3199L46.4478 31.7399L45.7312 32.8798L44.9353 33.7798L44.0994 34.4398L43.2637 34.92L42.4676 35.2399L41.7512 35.4198L41.1145 35.5199L40.6367 35.5599L40.3184 35.54H23.9602V37.18H35.582L35.602 42.6999L35.6418 43.4198L35.5422 44.1L35.3235 44.72L34.9851 45.3L34.4876 45.7999L33.8706 46.28L33.1145 46.68L32.2388 47.02L31.2239 47.3199L30.0696 47.5799L28.7961 47.76L27.3831 47.8999L25.8508 47.9799L24.1792 48L21.6518 47.92L19.5224 47.6398L17.7314 47.2399L16.2786 46.7398L15.1045 46.1399L14.209 45.4799L13.5324 44.8L13.0349 44.1199L12.7165 43.4598L12.5173 42.8599L12.4378 42.3599L12.398 41.9599L12.418 41.6999V31.0199L12.5176 29.7399L12.7761 28.6598L13.1941 27.7399L13.7114 26.9798L14.3086 26.3399L14.9653 25.8598L15.6618 25.4598L16.3582 25.1799L17.0149 24.9799L17.612 24.8599L18.1294 24.7799L18.5473 24.7399L18.8061 24.7198H30.428L31.801 24.6199L32.9751 24.34L33.9702 23.9199L34.7861 23.3598L35.4429 22.7199L35.9802 22.0198L36.3782 21.2999L36.6767 20.5798L36.8757 19.8798L37.0149 19.2399L37.0945 18.6799L37.1343 18.2599V12.1398H41.2935L41.5722 12.1599L41.99 12.2198ZM29.1145 40.7199L28.6567 41.3799L28.4976 42.1999L28.6567 43.0199L29.1145 43.6799L29.7712 44.14L30.5871 44.2999L31.4031 44.14L32.0598 43.6799L32.5173 43.0199L32.6765 42.1999L32.5173 41.3799L32.0598 40.7199L31.4031 40.26L30.5871 40.0999L29.7712 40.26L29.1145 40.7199Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_136_6">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </li>
            <li>
              {/* javascript */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_136_8)">
                  <path
                    d="M0 0H48V48H0V0ZM44.068 36.552C43.718 34.362 42.292 32.522 38.062 30.806C36.59 30.116 34.954 29.636 34.468 28.526C34.286 27.866 34.258 27.506 34.376 27.116C34.676 25.824 36.206 25.436 37.406 25.796C38.186 26.036 38.906 26.636 39.358 27.596C41.426 26.244 41.426 26.244 42.868 25.346C42.328 24.506 42.06 24.144 41.696 23.786C40.436 22.376 38.758 21.656 36.028 21.718L34.618 21.896C33.266 22.226 31.978 22.946 31.198 23.906C28.918 26.488 29.576 30.988 32.336 32.848C35.066 34.888 39.058 35.336 39.568 37.258C40.048 39.598 37.828 40.348 35.636 40.078C34.014 39.718 33.116 38.906 32.126 37.406L28.466 39.508C28.886 40.468 29.366 40.886 30.086 41.726C33.566 45.238 42.266 45.058 43.828 39.718C43.886 39.538 44.308 38.308 43.976 36.418L44.068 36.552ZM26.102 22.062H21.606C21.606 25.938 21.588 29.79 21.588 33.672C21.588 36.136 21.714 38.398 21.312 39.094C20.652 40.472 18.952 40.296 18.18 40.054C17.388 39.662 16.986 39.122 16.52 38.344C16.394 38.134 16.3 37.952 16.266 37.952L12.616 40.202C13.226 41.462 14.116 42.546 15.264 43.236C16.974 44.256 19.272 44.586 21.678 44.046C23.244 43.594 24.594 42.664 25.3 41.224C26.32 39.364 26.104 37.084 26.094 34.532C26.118 30.424 26.094 26.314 26.094 22.174L26.102 22.062Z"
                    fill="black"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_136_8">
                    <rect width="48" height="48" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </li>
            <li>
              {/* react */}
              <svg
                width="48"
                height="42"
                viewBox="0 0 48 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.2063 13.6125C38.7 13.4438 38.1938 13.2844 37.6875 13.1344C37.7719 12.7875 37.8469 12.4407 37.9219 12.0938C39.075 6.5063 38.3156 2.01567 35.7562 0.534423C33.2906 -0.881202 29.2687 0.590673 25.2 4.13442C24.7969 4.4813 24.4031 4.84692 24.0281 5.21255C23.775 4.9688 23.5125 4.72505 23.25 4.49067C18.9844 0.703173 14.7094 -0.890577 12.15 0.600048C9.69375 2.02505 8.9625 6.25317 9.99375 11.5407C10.0969 12.0657 10.2094 12.5813 10.3406 13.1063C9.74063 13.275 9.15 13.4625 8.59687 13.6594C3.59062 15.3938 0 18.1313 0 20.9625C0 23.8875 3.825 26.8219 9.02813 28.6032C9.45 28.7438 9.87188 28.8844 10.3031 29.0063C10.1625 29.5688 10.0406 30.1219 9.92813 30.6938C8.94375 35.8969 9.7125 40.0219 12.1688 41.4375C14.7 42.9 18.9562 41.4 23.1 37.7719C23.4281 37.4813 23.7562 37.1813 24.0844 36.8625C24.4969 37.2657 24.9281 37.65 25.3594 38.025C29.3719 41.475 33.3375 42.8719 35.7844 41.4563C38.3156 39.9938 39.1406 35.5594 38.0719 30.1594C37.9875 29.7469 37.8938 29.325 37.7906 28.8938C38.0906 28.8094 38.3813 28.7157 38.6719 28.6219C44.0813 26.8313 48 23.9344 48 20.9625C48 18.1219 44.3063 15.3657 39.2063 13.6125ZM26.5219 5.65317C30.0094 2.61567 33.2625 1.42505 34.7438 2.27817C36.3281 3.18755 36.9375 6.86255 35.9437 11.6907C35.8781 12.0094 35.8125 12.3188 35.7281 12.6282C33.6469 12.1594 31.5375 11.8219 29.4187 11.6344C28.2 9.89067 26.8688 8.22192 25.425 6.6563C25.7906 6.30942 26.1469 5.9813 26.5219 5.65317ZM15.675 25.8282C16.1531 26.6438 16.6406 27.4594 17.1562 28.2563C15.6937 28.0969 14.2406 27.8625 12.8063 27.5532C13.2188 26.2032 13.7344 24.8063 14.3344 23.3813C14.7656 24.2063 15.2062 25.0219 15.675 25.8282ZM12.8344 14.55C14.1844 14.25 15.6188 14.0063 17.1094 13.8188C16.6125 14.5969 16.125 15.3938 15.6656 16.2C15.2063 16.9969 14.7562 17.8125 14.3344 18.6375C13.7437 17.2407 13.2469 15.8719 12.8344 14.55ZM15.4031 21.0094C16.0219 19.7157 16.6969 18.45 17.4094 17.2032C18.1219 15.9563 18.8906 14.7469 19.6969 13.5563C21.1031 13.4532 22.5375 13.3969 24 13.3969C25.4625 13.3969 26.9062 13.4532 28.3031 13.5563C29.1 14.7375 29.8594 15.9469 30.5813 17.1844C31.3031 18.4219 31.9781 19.6875 32.6156 20.9719C31.9875 22.2657 31.3125 23.5407 30.5906 24.7969C29.8781 26.0438 29.1188 27.2532 28.3219 28.4532C26.925 28.5563 25.4719 28.6032 24 28.6032C22.5281 28.6032 21.1031 28.5563 19.725 28.4719C18.9094 27.2813 18.1406 26.0625 17.4188 24.8157C16.6969 23.5688 16.0313 22.3032 15.4031 21.0094ZM32.3344 25.8094C32.8125 24.9844 33.2625 24.15 33.7031 23.3063C34.3031 24.6657 34.8281 26.0438 35.2875 27.4594C33.8344 27.7875 32.3625 28.0407 30.8812 28.2094C31.3875 27.4219 31.8656 26.6157 32.3344 25.8094ZM33.6844 18.6375C33.2437 17.8125 32.7937 16.9875 32.325 16.1813C31.8656 15.3844 31.3875 14.5969 30.8906 13.8188C32.4 14.0063 33.8437 14.2594 35.1937 14.5688C34.7625 15.9563 34.2562 17.3063 33.6844 18.6375ZM24.0188 8.09067C25.0031 9.15942 25.9312 10.2844 26.7937 11.4469C24.9375 11.3625 23.0719 11.3625 21.2156 11.4469C22.1344 10.2375 23.0813 9.11255 24.0188 8.09067ZM13.1437 2.3438C14.7187 1.42505 18.2156 2.73755 21.9 6.00005C22.1344 6.2063 22.3687 6.4313 22.6125 6.6563C21.1594 8.22192 19.8188 9.89067 18.5906 11.6344C16.4719 11.8219 14.3719 12.15 12.2906 12.6094C12.1688 12.1313 12.0656 11.6438 11.9625 11.1563C11.0812 6.6188 11.6625 3.19692 13.1437 2.3438ZM10.8469 27.0563C10.4531 26.9438 10.0688 26.8219 9.68438 26.6907C7.6875 26.0625 5.41875 25.0688 3.77812 23.7657C2.83125 23.1094 2.19375 22.0969 2.01562 20.9625C2.01562 19.2469 4.97812 17.0532 9.25312 15.5625C9.7875 15.375 10.3312 15.2063 10.875 15.0469C11.5125 17.0813 12.2812 19.0782 13.1719 21.0094C12.2719 22.9688 11.4937 24.9938 10.8469 27.0563ZM21.7781 36.2438C20.2313 37.6594 18.4406 38.7844 16.4906 39.5532C15.45 40.05 14.25 40.0969 13.1813 39.675C11.6906 38.8125 11.0719 35.5032 11.9156 31.05C12.0187 30.525 12.1313 30 12.2625 29.4844C14.3625 29.9344 16.4812 30.2438 18.6281 30.4032C19.8656 32.1563 21.225 33.8344 22.6781 35.4094C22.3781 35.7 22.0781 35.9813 21.7781 36.2438ZM24.075 33.9657C23.1187 32.9344 22.1625 31.7907 21.2344 30.5625C22.1344 30.6 23.0625 30.6188 24 30.6188C24.9656 30.6188 25.9125 30.6 26.85 30.5532C25.9875 31.7438 25.0594 32.8782 24.075 33.9657ZM36.3281 36.7782C36.2438 37.9219 35.6813 38.9907 34.7812 39.7125C33.2906 40.575 30.1125 39.45 26.6813 36.5063C26.2875 36.1688 25.8937 35.8032 25.4906 35.4282C26.925 33.8438 28.2469 32.1657 29.4469 30.4032C31.5938 30.225 33.7312 29.8969 35.8406 29.4188C35.9344 29.8032 36.0187 30.1875 36.0938 30.5625C36.5531 32.5875 36.6281 34.6969 36.3281 36.7782ZM38.0344 26.7C37.7719 26.7844 37.5094 26.8688 37.2375 26.9438C36.5813 24.9 35.775 22.9032 34.8469 20.9625C35.7469 19.05 36.5063 17.0813 37.1438 15.0657C37.6313 15.2063 38.1 15.3563 38.55 15.5063C42.9188 17.0063 45.9844 19.2375 45.9844 20.9438C45.9844 22.7813 42.7125 25.1532 38.0344 26.7ZM24 25.2938C26.3719 25.2938 28.2937 23.3719 28.2937 21C28.2937 18.6282 26.3719 16.7063 24 16.7063C21.6281 16.7063 19.7062 18.6282 19.7062 21C19.7062 23.3719 21.6281 25.2938 24 25.2938Z"
                  fill="black"
                />
              </svg>
            </li>
            <li>
              {/* tailwind */}
              <svg
                width="48"
                height="30"
                viewBox="0 0 48 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.9992 0.719971C17.6526 0.719971 13.6859 3.89329 12.0992 10.24C14.4792 7.06663 17.2559 5.87663 20.4292 6.66997C22.24 7.12217 23.5332 8.43513 24.967 9.89089C27.3014 12.259 30.0008 15 35.8992 15C42.2458 15 46.2126 11.8266 47.7992 5.47995C45.4192 8.65329 42.6426 9.84329 39.4692 9.04997C37.6584 8.59777 36.3654 7.28479 34.9314 5.82903C32.599 3.46093 29.8996 0.719971 23.9992 0.719971ZM12.0992 15C5.75256 15 1.78589 18.1734 0.199219 24.52C2.57922 21.3466 5.35588 20.1566 8.52922 20.95C10.34 21.4022 11.6331 22.7152 13.0671 24.171C15.4015 26.539 18.1008 29.28 23.9992 29.28C30.3458 29.28 34.3126 26.1066 35.8992 19.76C33.5192 22.9334 30.7426 24.1234 27.5692 23.33C25.7584 22.8778 24.4652 21.5648 23.0314 20.109C20.699 17.741 17.9996 15 12.0992 15Z"
                  fill="black"
                />
              </svg>
            </li>
            <li>
              {/* figma */}
              <svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.69324 9.45895C8.69324 5.65516 11.7769 2.57153 15.5807 2.57153H23.9987V16.3464H15.5807C11.7769 16.3464 8.69324 13.2628 8.69324 9.45895Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.3065 9.45895C39.3065 5.65516 36.2232 2.57153 32.4192 2.57153H24.0013V16.3464H32.4192C36.2232 16.3464 39.3065 13.2628 39.3065 9.45895Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M39.3042 23.9979C39.3042 19.7715 35.878 16.3452 31.6515 16.3452C27.425 16.3452 23.9988 19.7715 23.9988 23.9979C23.9988 28.2244 27.425 31.6506 31.6515 31.6506C35.878 31.6506 39.3042 28.2244 39.3042 23.9979Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.69324 38.5416C8.69324 34.7376 11.7769 31.6541 15.5807 31.6541H23.9987V37.7764C23.9987 42.0028 20.5724 45.429 16.3459 45.429H15.5807C11.7769 45.429 8.69324 42.3453 8.69324 38.5416Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M8.69324 23.9989C8.69324 19.7724 12.1195 16.3462 16.3459 16.3462H23.9987V31.6516H16.3459C12.1195 31.6516 8.69324 28.2254 8.69324 23.9989Z"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
