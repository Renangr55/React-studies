import React from "react";
import logoSpotify from '../assets/spotify.png'
import { MdHomeFilled } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";



export const Header = () => {

    const Botao = (props) => {
        <button>
            {props.text}
        </button>
    }

    const painel_gap = 'gap-[8px]'

    return (
        <>
            <div className={`flex bg-black h-30 items-center`}>
                <div className="flex gap-10 items-center ">
                    <figure>
                        <img className="h-[60px]" src={logoSpotify} alt="" />
                    </figure>

                    <div className="flex gap-5 w-60">

                        <div className="flex justify-center">

                            <button className="flex justify-center bg-neutral-800  w-15 h-15 ">

                                <svg className="">
                                    <MdHomeFilled color="white" size={30}/>
                                </svg>

                            </button>

                        </div>

                        <div>

                        <button className="flex justify-center bg-neutral-800  w-15 h-15 ">
                                <svg className="items-center">
                                    <IoIosSearch color="white" size={40}/>
                                </svg>
                        </button>

                        </div>
                    </div>

                    {/* menu com ops botões */}
                    <div>
                        <Botao text="Premium" color="red"/>
                        <Botao text="Support" />
                        <Botao text="Download" />
                        

                        
                    </div>
                </div>


              

            </div>
        </>
    )
    
        
    
}