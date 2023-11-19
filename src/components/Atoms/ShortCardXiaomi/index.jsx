/* eslint-disable react/prop-types */
const ShortCardXiaomi = (props) => {
    const {Title, Specs, StartingPrice, PreviousPrice, PhonePic} = props;
    return (
        <div>
            <div className={`col-start-1 col-span-1 rounded-xl sm:col-span-1 lg:col-span-1 lg:m-3`}>
                <div className="p-8">
                    <div className="text-[52px] font-semibold sm:text-[24px]">{Title}</div>
                    <div className="text-[28px] font-normal sm:text-[18px]">{Specs}</div>
                    <div className="flex gap-2 flex-col md:flex md:flex-row md:items-center md:ml-[60px]">
                        <div className="mb-8 text-[28px] sm:text-[14px]">Mulai dari Rp {StartingPrice}</div>
                        <div className="mb-8 text-[28px] sm:text-[14px] line-through">{PreviousPrice}</div>
                    </div>
                    <div className="md:flex md:gap-2 md:ml-[60px]">
                        <button className="bg-black hover:bg-slate-700 text-white font-medium p-2 rounded-lg sm:text-[10px] lg:text-[15px]">Beli Sekarang</button>
                        <button className="border-2 border-slate-400 p-2 rounded-lg bg-transparent sm:text-[10px] lg:text-[15px]">Learn More</button>
                    </div>
                    <picture className="flex mt-5 ml-[200px] sm:ml-[10px] lg:ml-[50px]">
                        <img src={`${PhonePic}`} alt="phone3b" className="h-[200px] w-[160px] md:h-[260px] md:w-[260px]" />
                    </picture>
                </div>
            </div>
        </div>
    );
};

export default ShortCardXiaomi;
