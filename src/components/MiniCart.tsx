import React, { useEffect, useRef } from "react";
import styled from "styled-components";

interface MiniCartProps {
  cartRef: HTMLDivElement | null;
  onClose: Function;
}

function MiniCart(props: MiniCartProps) {
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (props.cartRef && !props.cartRef.contains(e.target as Node)) {
        props.onClose(false);
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <Container className="bg-white text-white rounded absolute top-12 shadow-lg shadow-gray-400 right-0 w-[350px] min-h-[200px]">
      <div className="max-h-[200px] overflow-auto overflow-x-hidden custom-scroll">
        <div className="w-[348px] flex px-[15px] pt-[13px] pb-[10px] h-[98px]">
          <img
            className="object-cover w-[47px] h-[72px] mr-4"
            src="https://i.imgur.com/xTUQx77.png"
            alt=""
          />

          <div className="w-[80%] mr-4 text-black flex flex-col justify-center">
            <h2 className="whitespace-wrap overflow-hidden truncate w-full text-base">
              <a href="#">
                Hạt Mix Siêu MACCA Wise Food 500g Không Yến Mạch, Hạt Bổ Sung
                Dinh Dưỡng
              </a>
            </h2>
            <p className="text-xs text-gray-600">
              QUANTITY: {1} x {767}
            </p>
          </div>
        </div>

        <div className="w-[348px] flex px-[15px] pt-[13px] pb-[10px] h-[98px]">
          <img
            className="object-cover w-[47px] h-[72px] mr-4"
            src="https://i.imgur.com/xTUQx77.png"
            alt=""
          />

          <div className="w-[80%] mr-4 text-black flex flex-col justify-center">
            <h2 className="whitespace-wrap overflow-hidden truncate w-full text-base">
              <a href="#">
                Hạt Mix Siêu MACCA Wise Food 500g Không Yến Mạch, Hạt Bổ Sung
                Dinh Dưỡng
              </a>
            </h2>
            <p className="text-xs text-gray-600">
              QUANTITY: {1} x {767}
            </p>
          </div>
        </div>

        <div className="w-[348px] flex px-[15px] pt-[13px] pb-[10px] h-[98px]">
          <img
            className="object-cover w-[47px] h-[72px] mr-4"
            src="https://i.imgur.com/xTUQx77.png"
            alt=""
          />

          <div className="w-[80%] mr-4 text-black flex flex-col justify-center">
            <h2 className="whitespace-wrap overflow-hidden truncate w-full text-base">
              <a href="#">
                Hạt Mix Siêu MACCA Wise Food 500g Không Yến Mạch, Hạt Bổ Sung
                Dinh Dưỡng
              </a>
            </h2>
            <p className="text-xs text-gray-600">
              QUANTITY: {1} x {767}
            </p>
          </div>
        </div>

        <div className="w-[348px] flex px-[15px] pt-[13px] pb-[10px] h-[98px]">
          <img
            className="object-cover w-[47px] h-[72px] mr-4"
            src="https://i.imgur.com/xTUQx77.png"
            alt=""
          />

          <div className="w-[80%] mr-4 text-black flex flex-col justify-center">
            <h2 className="whitespace-wrap overflow-hidden truncate w-full text-base">
              <a href="#">
                Hạt Mix Siêu MACCA Wise Food 500g Không Yến Mạch, Hạt Bổ Sung
                Dinh Dưỡng
              </a>
            </h2>
            <p className="text-xs text-gray-600">
              QUANTITY: {1} x {767}
            </p>
          </div>
        </div>
      </div>

      <div className="border-b"></div>

      <div className="w-[348px] px-[15px] pt-[13px] pb-[10px] h-[98px]">
        <div className=""></div>
      </div>
    </Container>
  );
}

export default MiniCart;

const Container = styled.div`
  .custom-scroll::-webkit-scrollbar {
    width: 8px;
  }

  .custom-scroll::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 4px;
  }

  .custom-scroll::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  }
`;
