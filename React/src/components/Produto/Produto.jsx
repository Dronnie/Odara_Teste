/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Favoritar1 } from "../../icons/Favoritar1";
import { Favoritar6 } from "../../icons/Favoritar6";
import { Favoritar7 } from "../../icons/Favoritar7";

export const Produto = ({
  property1,
  className,
  icon = <Favoritar6 className="!absolute !w-6 !h-6 !top-[71px] !left-[52px] !rotate-180" />,
  starClassName,
  star = "/img/star-2-7.svg",
  starClassNameOverride,
  img = "/img/star-2-7.svg",
  imgClassName,
  star1 = "/img/star-2-7.svg",
  imgClassNameOverride,
  star2 = "/img/star-2-7.svg",
  starClassName1,
  star3 = "/img/star-2-7.svg",
  addShoppingCart = "/img/add-shopping-cart-7.png",
  override = <Favoritar7 className="!absolute !w-6 !h-6 !top-[72px] !left-[52px] !rotate-180" />,
  starClassName2,
  star4 = "/img/star-2-7.svg",
  starClassName3,
  star5 = "/img/star-2-7.svg",
  starClassName4,
  star6 = "/img/star-2-7.svg",
  starClassName5,
  star7 = "/img/star-2-7.svg",
  starClassName6,
  star8 = "/img/star-2-7.svg",
}) => {
  return (
    <div className={`w-[388px] -rotate-180 h-[102px] ${className}`}>
      <div
        className={`left-[-5px] relative ${
          ["fibra-jumbo", "variant-6"].includes(property1)
            ? "w-[411px]"
            : property1 === "kit-cilindro-dou"
            ? "w-[379px]"
            : "w-[373px]"
        } ${
          ["fibra-jumbo", "variant-6"].includes(property1) ? "-top-3" : property1 === "touca-cetim" ? "-top-px" : ""
        } ${
          property1 === "t-nico-capilar"
            ? "h-[102px]"
            : property1 === "kit-cora-es"
            ? "h-[122px]"
            : property1 === "cord-o-dourado"
            ? "h-[109px]"
            : property1 === "kit-cilindro-dou"
            ? "h-[170px]"
            : property1 === "kit-ace-molinha-dou"
            ? "h-[118px]"
            : property1 === "touca-cetim"
            ? "h-[120px]"
            : "h-[167px]"
        }`}
      >
        {["cord-o-dourado", "fibra-jumbo", "kit-cora-es", "variant-6"].includes(property1) && (
          <div
            className={`w-[348px] left-[25px] opacity-15 h-[102px] rounded-[10px] absolute ${
              ["cord-o-dourado", "kit-cora-es"].includes(property1) ? "top-0" : "top-3"
            } ${property1 === "fibra-jumbo" ? "shadow-[0px_4px_4px_#0000001a]" : ""} ${
              ["cord-o-dourado", "kit-cora-es", "variant-6"].includes(property1) ? "bg-[#a700b0]" : ""
            }`}
          />
        )}

        {["kit-ace-molinha-dou", "kit-cilindro-dou", "t-nico-capilar", "touca-cetim"].includes(property1) && (
          <div
            className={`w-[348px] left-[25px] opacity-15 h-[102px] rounded-[10px] bg-[#a700b0] absolute ${
              property1 === "touca-cetim" ? "top-px" : "top-0"
            }`}
          />
        )}

        {["cord-o-dourado", "fibra-jumbo", "kit-cora-es", "t-nico-capilar", "variant-6"].includes(property1) && (
          <div
            className={`[font-family:'Inter',Helvetica] tracking-[0.64px] text-base text-[#a700b0] absolute rotate-180 font-semibold whitespace-nowrap leading-[normal] ${
              property1 === "kit-cora-es"
                ? "left-[132px]"
                : property1 === "variant-6"
                ? "left-[155px]"
                : property1 === "cord-o-dourado"
                ? "left-[103px]"
                : property1 === "t-nico-capilar"
                ? "left-[77px]"
                : "left-[88px]"
            } ${["fibra-jumbo", "variant-6"].includes(property1) ? "top-[78px]" : "top-[66px]"}`}
          >
            {property1 === "fibra-jumbo" && <>Fibra Jumbo 390g</>}

            {property1 === "kit-cora-es" && <>Kit Corações</>}

            {property1 === "variant-6" && <>Kit Buzios</>}

            {property1 === "cord-o-dourado" && <>Cordão Dourado</>}

            {property1 === "t-nico-capilar" && <>Tônico Capilar Alho</>}
          </div>
        )}

        {(property1 === "cord-o-dourado" ||
          property1 === "fibra-jumbo" ||
          property1 === "kit-ace-molinha-dou" ||
          property1 === "kit-cilindro-dou" ||
          property1 === "kit-cora-es" ||
          property1 === "t-nico-capilar" ||
          property1 === "variant-6") && (
          <>
            <div
              className={`[font-family:'Inter',Helvetica] tracking-[0] text-[13px] text-[#484848] rotate-180 font-normal leading-[normal] absolute ${
                property1 === "kit-cora-es"
                  ? "left-[124px]"
                  : property1 === "variant-6"
                  ? "left-[143px]"
                  : property1 === "cord-o-dourado"
                  ? "left-[123px]"
                  : property1 === "t-nico-capilar"
                  ? "left-[57px]"
                  : property1 === "kit-cilindro-dou"
                  ? "left-[119px]"
                  : property1 === "kit-ace-molinha-dou"
                  ? "left-[117px]"
                  : "left-[110px]"
              } ${["fibra-jumbo", "variant-6"].includes(property1) ? "top-[59px]" : "top-[47px]"}`}
            >
              {property1 === "fibra-jumbo" && <>Alinea, Cor #27 Loiro</>}

              {property1 === "kit-cora-es" && <>5 uni, Cor Colorido</>}

              {property1 === "variant-6" && <>5 uni, Cor Prata</>}

              {property1 === "cord-o-dourado" && <>5 uni, Cor Dourado</>}

              {property1 === "t-nico-capilar" && <>Gota Dourada Fortalecimento</>}

              {property1 === "kit-cilindro-dou" && <>!0 uni, Cor Dourado</>}

              {property1 === "kit-ace-molinha-dou" && <>10 uni, Cor Dourada</>}
            </div>
            <div
              className={`[font-family:'Inter',Helvetica] tracking-[0] text-base text-[#e60032] rotate-180 font-semibold leading-[normal] absolute ${
                property1 === "fibra-jumbo"
                  ? "left-[167px]"
                  : property1 === "t-nico-capilar"
                  ? "left-[173px]"
                  : ["kit-ace-molinha-dou", "kit-cilindro-dou"].includes(property1)
                  ? "left-[178px]"
                  : "left-[170px]"
              } ${["fibra-jumbo", "variant-6"].includes(property1) ? "top-[13px]" : "top-px"}`}
            >
              {property1 === "fibra-jumbo" && <>R$ 40,00</>}

              {["cord-o-dourado", "kit-cora-es", "variant-6"].includes(property1) && <>R$ 10,00</>}

              {property1 === "t-nico-capilar" && <>R$ 17,50</>}

              {["kit-ace-molinha-dou", "kit-cilindro-dou"].includes(property1) && <>R$ 5,00</>}
            </div>
            <img
              className={`w-[52px] left-0 rotate-180 h-[52px] absolute ${
                ["fibra-jumbo", "variant-6"].includes(property1) ? "top-[37px]" : "top-[25px]"
              }`}
              alt="Mask group"
              src="/img/mask-group-7.png"
            />
            <div
              className={`[background:linear-gradient(180deg,rgb(167,0,176)_0%,rgb(193.91,0,122.19)_33.33%,rgb(193.91,0,46.54)_66.67%,rgb(230,0,50)_100%)] w-10 left-[7px] shadow-[0px_4px_4px_#00000040] h-10 rounded-[20px] absolute ${
                ["fibra-jumbo", "variant-6"].includes(property1) ? "top-[43px]" : "top-[31px]"
              }`}
            >
              <img
                className="w-5 left-2.5 top-2.5 rotate-180 h-5 absolute"
                alt="Add shopping cart"
                src="/img/add-shopping-cart-7.png"
              />
              {property1 === "t-nico-capilar" && (
                <div className="absolute w-[122px] h-[121px] top-[-29px] left-[246px]">
                  <div className="absolute w-[120px] h-[121px] top-0 left-0 rotate-180" />
                  <img
                    className="absolute w-[108px] h-[106px] top-[7px] left-3.5 rotate-180 object-cover"
                    alt="Tonico"
                    src="/img/tonico-1-1-1.png"
                  />
                </div>
              )}
            </div>
          </>
        )}

        {property1 === "t-nico-capilar" && (
          <>
            <Favoritar1 className="!absolute !w-6 !h-6 !top-[71px] !left-[52px] !rotate-180" />
            <div className="absolute w-[89px] h-[17px] top-[23px] left-16">
              <div className="relative h-[17px]">
                <img className="absolute w-4 h-[15px] top-0 left-0" alt="Star" src="/img/star-2-7.svg" />
                <img className="absolute w-4 h-[15px] top-0 left-[54px]" alt="Star" src="/img/star-2-7.svg" />
                <img className="absolute w-4 h-[15px] top-0 left-[72px]" alt="Star" src="/img/star-2-7.svg" />
                <img className="absolute w-4 h-[15px] top-0 left-9" alt="Star" src="/img/star-2-7.svg" />
                <img className="absolute w-4 h-[15px] top-0 left-[18px]" alt="Star" src="/img/star-2-7.svg" />
              </div>
            </div>
          </>
        )}

        {["kit-ace-molinha-dou", "kit-cilindro-dou"].includes(property1) && (
          <>
            {icon}
            <div
              className={`left-16 absolute ${property1 === "kit-ace-molinha-dou" ? "w-[299px]" : "w-[315px]"} ${
                property1 === "kit-ace-molinha-dou" ? "top-1" : "top-[11px]"
              } ${property1 === "kit-ace-molinha-dou" ? "h-[114px]" : "h-[159px]"}`}
            >
              <div
                className={`relative ${property1 === "kit-ace-molinha-dou" ? "w-[115px]" : "w-[135px]"} ${
                  property1 === "kit-ace-molinha-dou" ? "h-[114px]" : "h-[159px]"
                }`}
              >
                <div
                  className={`w-[89px] left-0 h-[17px] absolute ${
                    property1 === "kit-ace-molinha-dou" ? "top-[19px]" : "top-3"
                  }`}
                >
                  <img className={`w-4 left-0 top-0 h-[15px] absolute ${starClassName}`} alt="Star" src={star} />
                  <img
                    className={`w-4 left-[54px] top-0 h-[15px] absolute ${starClassNameOverride}`}
                    alt="Star"
                    src={img}
                  />
                  <img className={`w-4 left-[72px] top-0 h-[15px] absolute ${imgClassName}`} alt="Star" src={star1} />
                  <img
                    className={`w-4 left-9 top-0 h-[15px] absolute ${imgClassNameOverride}`}
                    alt="Star"
                    src={star2}
                  />
                  <img className={`w-4 left-[18px] top-0 h-[15px] absolute ${starClassName1}`} alt="Star" src={star3} />
                </div>
                <img
                  className={`left-0 top-0 object-cover absolute ${
                    property1 === "kit-ace-molinha-dou" ? "w-[115px]" : "w-[135px]"
                  } ${property1 === "kit-ace-molinha-dou" ? "h-[114px]" : "h-[159px]"}`}
                  alt="Acessorio"
                  src={property1 === "kit-ace-molinha-dou" ? "/img/acessorio-1-1.png" : "/img/acessorio-2-1.png"}
                />
              </div>
            </div>
            <div className="[font-family:'Inter',Helvetica] w-60 left-0 tracking-[0.64px] text-base top-[76px] text-[#a700b0] rotate-180 font-semibold leading-[normal] absolute">
              Kit Acessórios
            </div>
          </>
        )}

        {["cord-o-dourado", "fibra-jumbo", "kit-cora-es", "touca-cetim", "variant-6"].includes(property1) && (
          <img
            className={`rotate-180 object-cover absolute ${
              property1 === "touca-cetim"
                ? "w-[101px]"
                : property1 === "kit-cora-es"
                ? "w-[143px]"
                : property1 === "cord-o-dourado"
                ? "w-[109px]"
                : "w-[189px]"
            } ${
              property1 === "touca-cetim"
                ? "left-[250px]"
                : property1 === "kit-cora-es"
                ? "left-[230px]"
                : property1 === "cord-o-dourado"
                ? "left-[255px]"
                : "left-[222px]"
            } ${property1 === "kit-cora-es" ? "top-px" : property1 === "cord-o-dourado" ? "top-3" : "top-0"} ${
              property1 === "touca-cetim"
                ? "h-[120px]"
                : property1 === "kit-cora-es"
                ? "h-[121px]"
                : property1 === "cord-o-dourado"
                ? "h-[97px]"
                : "h-[167px]"
            }`}
            alt="Modelo"
            src={
              property1 === "touca-cetim"
                ? "/img/modelo-1-1-1.png"
                : property1 === "kit-cora-es"
                ? "/img/fibras2-1-1.png"
                : property1 === "cord-o-dourado"
                ? "/img/fibras2-1-3.png"
                : "/img/fibras2-1-2.png"
            }
          />
        )}

        {property1 === "touca-cetim" && (
          <>
            <div className="absolute top-[67px] left-[135px] rotate-180 [font-family:'Inter',Helvetica] font-semibold text-[#a700b0] text-base tracking-[0.64px] leading-[normal] whitespace-nowrap">
              Touca Cetim
            </div>
            <div className="absolute top-12 left-[110px] rotate-180 [font-family:'Inter',Helvetica] font-normal text-[#484848] text-[13px] tracking-[0] leading-[normal]">
              Alinea, Cor #27 Loiro
            </div>
            <div className="absolute top-0.5 left-[171px] rotate-180 [font-family:'Inter',Helvetica] font-semibold text-[#e60032] text-base tracking-[0] leading-[normal]">
              R$ 15,00
            </div>
            <img
              className="absolute w-[52px] h-[52px] top-[26px] left-0 rotate-180"
              alt="Mask group"
              src="/img/mask-group-7.png"
            />
            <div className="absolute w-10 h-10 top-8 left-[7px] rounded-[20px] shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(167,0,176)_0%,rgb(193.91,0,122.19)_33.33%,rgb(193.91,0,46.54)_66.67%,rgb(230,0,50)_100%)]">
              <img
                className="absolute w-5 h-5 top-2.5 left-2.5 rotate-180"
                alt="Add shopping cart"
                src={addShoppingCart}
              />
            </div>
          </>
        )}

        {["cord-o-dourado", "fibra-jumbo", "kit-cora-es", "touca-cetim", "variant-6"].includes(property1) && (
          <>
            {override}
            <div
              className={`w-[89px] left-16 h-[17px] absolute ${
                property1 === "touca-cetim"
                  ? "top-6"
                  : ["cord-o-dourado", "kit-cora-es"].includes(property1)
                  ? "top-[23px]"
                  : "top-[35px]"
              }`}
            >
              <div className="h-[17px] relative">
                <img className={`w-4 left-0 top-0 h-[15px] absolute ${starClassName2}`} alt="Star" src={star4} />
                <img className={`w-4 left-[54px] top-0 h-[15px] absolute ${starClassName3}`} alt="Star" src={star5} />
                <img className={`w-4 left-[72px] top-0 h-[15px] absolute ${starClassName4}`} alt="Star" src={star6} />
                <img className={`w-4 left-9 top-0 h-[15px] absolute ${starClassName5}`} alt="Star" src={star7} />
                <img className={`w-4 left-[18px] top-0 h-[15px] absolute ${starClassName6}`} alt="Star" src={star8} />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

Produto.propTypes = {
  property1: PropTypes.oneOf([
    "kit-cora-es",
    "fibra-jumbo",
    "kit-cilindro-dou",
    "t-nico-capilar",
    "cord-o-dourado",
    "variant-6",
    "kit-ace-molinha-dou",
    "touca-cetim",
  ]),
  star: PropTypes.string,
  img: PropTypes.string,
  star1: PropTypes.string,
  star2: PropTypes.string,
  star3: PropTypes.string,
  addShoppingCart: PropTypes.string,
  star4: PropTypes.string,
  star5: PropTypes.string,
  star6: PropTypes.string,
  star7: PropTypes.string,
  star8: PropTypes.string,
};
