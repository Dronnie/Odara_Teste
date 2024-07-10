import React from "react";
import { ConcreteComponentNode } from "../../components/ConcreteComponentNode";
import { Produto } from "../../components/Produto";
import { BarraDeBusca } from "../../icons/BarraDeBusca";
import { Favoritar13 } from "../../icons/Favoritar13";
import { Favoritar14 } from "../../icons/Favoritar14";
import { Footer } from "../../icons/Footer";

export const Home = () => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[390px] h-[921px] relative">
        <div className="flex flex-col w-[390px] items-center gap-5 absolute top-[72px] left-0">
          <div className="relative w-[363.05px] h-[95px]">
            <div className="relative w-[363px] h-[95px]">
              <img className="absolute w-8 h-8 top-[63px] left-[331px]" alt="Whatsapp" src="/img/whatsapp.svg" />
              <div className="absolute w-[353px] h-[94px] top-0 left-0">
                <img
                  className="absolute w-[85px] h-[54px] top-0.5 left-1"
                  alt="Logo odara roxo e"
                  src="/img/logo-odara-roxo-e-vermelho-1.svg"
                />
                <div className="absolute top-[70px] left-[102px] [font-family:'Inter',Helvetica] font-bold text-[#a700b0] text-base text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  Escolha sua Técnica
                </div>
                <div className="inline-flex items-center justify-center gap-2.5 px-[27px] py-[7px] absolute top-0 left-[230px] bg-white rounded-[15px] border border-solid border-[#a700b0]">
                  <div className="relative w-fit mt-[-0.63px] rotate-[-0.64deg] [font-family:'Inter',Helvetica] font-semibold text-[#484848] text-[10px] tracking-[0] leading-[normal] whitespace-nowrap">
                    Sou Trancista
                  </div>
                </div>
                <BarraDeBusca className="!absolute !w-[31px] !h-[31px] !top-[63px] !left-0" />
              </div>
            </div>
          </div>
          <div className="inline-flex items-start justify-center gap-2.5 relative flex-[0_0_auto] ml-[-58.75px] mr-[-58.75px]">
            <img className="w-[162.5px] h-20 relative object-cover" alt="Image" src="/img/image-17.png" />
            <img className="w-[280px] h-20 relative object-cover" alt="Image" src="/img/image-15.png" />
            <img className="w-[45px] h-20 relative object-cover" alt="Image" src="/img/image-16.png" />
          </div>
          <div className="flex flex-wrap w-[369px] items-center gap-[0px_-1px] relative flex-[0_0_auto]">
            <img className="w-[123.5px] h-44 relative object-cover" alt="Image" src="/img/image-18.png" />
            <img className="w-[123px] h-[176.5px] relative object-cover" alt="Image" src="/img/image-19.png" />
            <img className="w-[123.5px] h-[176.5px] relative object-cover" alt="Image" src="/img/image-20.png" />
            <img className="w-[123px] h-[176.5px] relative object-cover" alt="Image" src="/img/image-21.png" />
            <img className="w-[124px] h-[176.5px] relative object-cover" alt="Image" src="/img/image-22.png" />
            <img className="w-[123.5px] h-44 relative object-cover" alt="Image" src="/img/image-23.png" />
          </div>
          <div className="relative w-[73px] h-[19px]">
            <div className="absolute top-0 left-0 [font-family:'Inter',Helvetica] font-semibold text-[#e60032] text-base tracking-[0] leading-[normal] whitespace-nowrap">
              Produtos
            </div>
          </div>
          <div className="flex flex-col w-[390px] items-center gap-5 pl-0 pr-3.5 py-1.5 relative flex-[0_0_auto]">
            <div className="relative w-[388px] h-[102px] ml-[-6.00px] mr-[-6.00px] -rotate-180">
              <div className="relative w-[371px] h-[102px] left-[-3px]">
                <div className="absolute w-[348px] h-[102px] top-0 left-[23px] bg-white rounded-[10px] rotate-180 shadow-[0px_2px_4px_#00000033]" />
                <div className="top-0 left-[23px] shadow-[100px_100px_8px_200px_#00000040] absolute w-[348px] h-[102px] rounded-[10px] opacity-15" />
                <div className="left-[130px] absolute top-[66px] rotate-180 [font-family:'Inter',Helvetica] font-semibold text-[#a700b0] text-base tracking-[0.64px] leading-[normal] whitespace-nowrap">
                  Kit Corações
                </div>
                <div className="left-[122px] absolute top-[47px] rotate-180 [font-family:'Inter',Helvetica] font-normal text-[#484848] text-[13px] tracking-[0] leading-[normal]">
                  5 uni, Cor Colorido
                </div>
                <div className="w-[73px] left-[164px] absolute top-[21px] rotate-180 [font-family:'Inter',Helvetica] font-semibold text-[#e60032] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  R$&nbsp;&nbsp;10,00
                </div>
                <img
                  className="absolute w-[52px] h-[52px] top-[25px] left-0 rotate-180"
                  alt="Mask group"
                  src="/img/mask-group-7.png"
                />
                <div className="absolute w-10 h-10 top-[31px] left-[5px] rounded-[20px] shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(167,0,176)_0%,rgb(193.91,0,122.19)_33.33%,rgb(193.91,0,46.54)_66.67%,rgb(230,0,50)_100%)]">
                  <img
                    className="absolute w-5 h-5 top-2.5 left-2.5 rotate-180"
                    alt="Add shopping cart"
                    src="/img/add-shopping-cart-7.png"
                  />
                </div>
                <img
                  className="w-[98px] h-[82px] top-[13px] left-[257px] absolute rotate-180 object-cover"
                  alt="Fibras"
                  src="/img/fibras2-2-1.png"
                />
                <Favoritar13 className="!top-[71px] !left-[50px] !absolute !w-6 !h-6 !rotate-180" />
                <div className="absolute w-[89px] h-[17px] top-[23px] left-[62px]">
                  <div className="relative h-[17px]">
                    <img className="left-0 absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-7.svg" />
                    <img className="left-[54px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-7.svg" />
                    <img className="left-[72px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-7.svg" />
                    <img className="left-9 absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-7.svg" />
                    <img className="left-[18px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-7.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[388px] h-[102px] ml-[-6.00px] mr-[-6.00px] -rotate-180">
              <div className="relative w-[371px] h-[102px] left-[-3px]">
                <div className="absolute w-[348px] h-[102px] top-0 left-[23px] bg-white rounded-[10px] rotate-180 shadow-[0px_2px_4px_#00000033]" />
                <div className="top-0 left-[23px] shadow-[100px_100px_8px_200px_#00000040] absolute w-[348px] h-[102px] rounded-[10px] opacity-15" />
                <div className="absolute top-[66px] left-[86px] rotate-180 [font-family:'Inter',Helvetica] font-semibold text-[#a700b0] text-base tracking-[0.64px] leading-[normal] whitespace-nowrap">
                  Fibra Jumbo 390g
                </div>
                <div className="absolute top-[47px] left-[108px] rotate-180 [font-family:'Inter',Helvetica] font-normal text-[#484848] text-[13px] tracking-[0] leading-[normal]">
                  Alinea, Cor #27 Loiro
                </div>
                <div className="w-[72px] top-[21px] left-[165px] whitespace-nowrap absolute rotate-180 [font-family:'Inter',Helvetica] font-semibold text-[#e60032] text-base tracking-[0] leading-[normal]">
                  R$ 40,00
                </div>
                <img
                  className="absolute w-[52px] h-[52px] top-[25px] left-0 rotate-180"
                  alt="Mask group"
                  src="/img/mask-group-7.png"
                />
                <div className="absolute w-10 h-10 top-[31px] left-[5px] rounded-[20px] shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(167,0,176)_0%,rgb(193.91,0,122.19)_33.33%,rgb(193.91,0,46.54)_66.67%,rgb(230,0,50)_100%)]">
                  <img
                    className="absolute w-5 h-5 top-2.5 left-2.5 rotate-180"
                    alt="Add shopping cart"
                    src="/img/add-shopping-cart-7.png"
                  />
                </div>
                <img
                  className="w-[100px] h-[95px] top-0 left-64 absolute rotate-180 object-cover"
                  alt="Fibras"
                  src="/img/fibras2-1-6.png"
                />
                <Favoritar14 className="!top-[71px] !left-[50px] !absolute !w-6 !h-6 !rotate-180" />
                <div className="absolute w-[89px] h-[17px] top-[23px] left-[62px]">
                  <div className="relative h-[17px]">
                    <img className="left-0 absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-7.svg" />
                    <img className="left-[54px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-7.svg" />
                    <img className="left-[72px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-7.svg" />
                    <img className="left-9 absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-7.svg" />
                    <img className="left-[18px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-7.svg" />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[388px] h-[102px] ml-[-6.00px] mr-[-6.00px] -rotate-180">
              <div className="relative w-[371px] h-[102px] left-[-3px]">
                <div className="absolute w-[348px] h-[102px] top-0 left-[23px] bg-white rounded-[10px] rotate-180 shadow-[0px_2px_4px_#00000033]" />
                <div className="top-0 left-[23px] shadow-[100px_100px_8px_200px_#00000040] absolute w-[348px] h-[102px] rounded-[10px] opacity-15" />
                <div className="left-[116px] absolute top-[66px] rotate-180 [font-family:'Inter',Helvetica] font-semibold text-[#a700b0] text-base tracking-[0.64px] leading-[normal] whitespace-nowrap">
                  Kit Acessórios
                </div>
                <div className="absolute top-[47px] left-[117px] rotate-180 [font-family:'Inter',Helvetica] font-normal text-[#484848] text-[13px] tracking-[0] leading-[normal]">
                  !0 uni, Cor Dourado
                </div>
                <div className="w-[86px] left-[151px] absolute top-[21px] rotate-180 [font-family:'Inter',Helvetica] font-semibold text-[#e60032] text-base tracking-[0] leading-[normal] whitespace-nowrap">
                  R$&nbsp;&nbsp;05,00
                </div>
                <img
                  className="absolute w-[52px] h-[52px] top-[25px] left-0 rotate-180"
                  alt="Mask group"
                  src="/img/mask-group-7.png"
                />
                <div className="absolute w-10 h-10 top-[31px] left-[5px] rounded-[20px] shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(167,0,176)_0%,rgb(193.91,0,122.19)_33.33%,rgb(193.91,0,46.54)_66.67%,rgb(230,0,50)_100%)]">
                  <img
                    className="absolute w-5 h-5 top-2.5 left-2.5 rotate-180"
                    alt="Add shopping cart"
                    src="/img/add-shopping-cart-7.png"
                  />
                </div>
                <img
                  className="absolute w-[135px] h-[87px] top-2 left-[236px] rotate-180 object-cover"
                  alt="Acessorio"
                  src="/img/acessorio-2-1-2.png"
                />
                <ConcreteComponentNode fav="un-fav" />
                <div className="absolute w-[89px] h-[17px] top-[23px] left-[62px]">
                  <div className="relative h-[17px]">
                    <img className="left-0 absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-18.png" />
                    <img className="left-[54px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-18.png" />
                    <img className="left-[72px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-18.png" />
                    <img className="left-9 absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-18.png" />
                    <img className="left-[18px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-18.png" />
                  </div>
                </div>
              </div>
            </div>
            <Produto
              className="!mr-[-6.00px] !ml-[-6.00px] !relative"
              icon={<ConcreteComponentNode fav="un-fav" />}
              img="/img/star-2-18.png"
              imgClassName="!h-[17px] !w-[17px]"
              imgClassNameOverride="!h-[17px] !w-[17px]"
              property1="kit-ace-molinha-dou"
              star="/img/star-2-18.png"
              star1="/img/star-2-18.png"
              star2="/img/star-2-18.png"
              star3="/img/star-2-18.png"
              starClassName="!h-[17px] !w-[17px]"
              starClassName1="!h-[17px] !w-[17px]"
              starClassNameOverride="!h-[17px] !w-[17px]"
            />
            <Produto
              addShoppingCart="/img/add-shopping-cart-18.png"
              className="!mr-[-6.00px] !ml-[-6.00px] !relative"
              override={<ConcreteComponentNode fav="un-fav" />}
              property1="touca-cetim"
              star4="/img/star-2-18.png"
              star5="/img/star-2-18.png"
              star6="/img/star-2-18.png"
              star7="/img/star-2-18.png"
              star8="/img/star-2-18.png"
              starClassName2="!h-[17px] !w-[17px]"
              starClassName3="!h-[17px] !w-[17px]"
              starClassName4="!h-[17px] !w-[17px]"
              starClassName5="!h-[17px] !w-[17px]"
              starClassName6="!h-[17px] !w-[17px]"
            />
            <div className="relative w-[388px] h-[102px] ml-[-6.00px] mr-[-6.00px] -rotate-180">
              <div className="relative w-[373px] h-[102px] left-[-5px]">
                <div className="top-0 left-[25px] bg-[#a700b0] absolute w-[348px] h-[102px] rounded-[10px] opacity-15" />
                <div className="absolute top-[66px] left-[77px] rotate-180 [font-family:'Inter',Helvetica] font-semibold text-[#a700b0] text-base tracking-[0.64px] leading-[normal] whitespace-nowrap">
                  Tônico Capilar Alho
                </div>
                <div className="absolute top-[47px] left-[57px] rotate-180 [font-family:'Inter',Helvetica] font-normal text-[#484848] text-[13px] tracking-[0] leading-[normal]">
                  Gota Dourada Fortalecimento
                </div>
                <div className="top-px left-[173px] absolute rotate-180 [font-family:'Inter',Helvetica] font-semibold text-[#e60032] text-base tracking-[0] leading-[normal]">
                  R$ 17,50
                </div>
                <img
                  className="absolute w-[52px] h-[52px] top-[25px] left-0 rotate-180"
                  alt="Mask group"
                  src="/img/mask-group-7.png"
                />
                <div className="top-[31px] absolute w-10 h-10 left-[7px] rounded-[20px] shadow-[0px_4px_4px_#00000040] [background:linear-gradient(180deg,rgb(167,0,176)_0%,rgb(193.91,0,122.19)_33.33%,rgb(193.91,0,46.54)_66.67%,rgb(230,0,50)_100%)]">
                  <img
                    className="absolute w-5 h-5 top-2.5 left-2.5 rotate-180"
                    alt="Add shopping cart"
                    src="/img/add-shopping-cart-18.png"
                  />
                  <img
                    className="absolute w-[108px] h-[106px] top-[-22px] left-[260px] rotate-180 object-cover"
                    alt="Tonico"
                    src="/img/tonico-1-1-1.png"
                  />
                </div>
                <ConcreteComponentNode fav="un-fav" />
                <div className="w-[89px] h-[17px] top-[23px] absolute left-16">
                  <div className="relative h-[17px]">
                    <img className="left-0 absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-18.png" />
                    <img className="left-[54px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-18.png" />
                    <img className="left-[72px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-18.png" />
                    <img className="left-9 absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-18.png" />
                    <img className="left-[18px] absolute w-[17px] h-[17px] top-0" alt="Star" src="/img/star-2-18.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer className="!fixed !w-[390px] !h-[47px] !top-[874px] !left-0" />
        <div className="flex w-[390px] h-12 items-end justify-between px-6 py-2.5 fixed top-0 left-0 bg-white">
          <div className="relative w-fit [font-family:'Roboto',Helvetica] font-medium text-m-3refneutralneutral-10 text-sm tracking-[0.14px] leading-5 whitespace-nowrap">
            9:30
          </div>
          <div className="relative w-[46px] h-[17px]">
            <div className="absolute w-[33px] h-[17px] top-0 left-0">
              <div className="absolute w-[17px] h-[17px] top-0 left-0 bg-[url(/static/img/path-4.png)] bg-[100%_100%]">
                <div className="relative h-[17px] bg-[url(/static/img/path-4.png)] bg-[100%_100%]">
                  <img className="absolute w-[17px] h-3.5 top-px left-0" alt="Path" src="/img/path-5.svg" />
                </div>
              </div>
              <img className="absolute w-[17px] h-[17px] top-0 left-4" alt="Signal" src="/img/signal-1.png" />
            </div>
            <img className="absolute w-2 h-[15px] top-px left-[38px]" alt="Battery" src="/img/battery-1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
