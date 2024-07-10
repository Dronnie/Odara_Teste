import { Produto } from ".";

export default {
  title: "Components/Produto",
  component: Produto,
  argTypes: {
    property1: {
      options: [
        "kit-cora-es",
        "fibra-jumbo",
        "kit-cilindro-dou",
        "t-nico-capilar",
        "cord-o-dourado",
        "variant-6",
        "kit-ace-molinha-dou",
        "touca-cetim",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "kit-cora-es",
    className: {},
    starClassName: {},
    star: "/img/star-2-7.svg",
    starClassNameOverride: {},
    img: "/img/star-2-7.svg",
    imgClassName: {},
    star1: "/img/star-2-7.svg",
    imgClassNameOverride: {},
    star2: "/img/star-2-7.svg",
    starClassName1: {},
    star3: "/img/star-2-7.svg",
    addShoppingCart: "/img/add-shopping-cart-7.png",
    starClassName2: {},
    star4: "/img/star-2-7.svg",
    starClassName3: {},
    star5: "/img/star-2-7.svg",
    starClassName4: {},
    star6: "/img/star-2-7.svg",
    starClassName5: {},
    star7: "/img/star-2-7.svg",
    starClassName6: {},
    star8: "/img/star-2-7.svg",
  },
};
