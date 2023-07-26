import {useState} from "react";

export default function Contact() {
    const [formdata, setFormData] = useState({
        fullname: '',
        email: '',
        phone: 0,
        city: '',
        feedback: ''
    })
    return (
        <div className="w-full px-7 md:px-14 lg:px-28 my-10">
            <div>
                <h1 className='text-[20px] md:text-[30px] lg:text-[44px] font-bold text-shadow '>Contact us</h1>
                <p className="text-sm md:text-base lg:text-[20px] font-medium  text-[#7F7F7F]">Send us message</p>
            </div>
            <div className="border-2 border-[#FFDB00] rounded-md flex flex-col md:flex-row gap-5 my-6 p-6">
                <div className="w-full md:w-[35%]">
                    <p className="text-2xl md:text-4xl lg:text-6xl font-bold my-5">Let's Get in
                        <span>Touch</span>
                    </p>
                    <div className="w-[50%] h-2 bg-[#FFDB00] my-5"/>
                    <p className="text-[#BDBDBD] text-[14px] md:text-[20px]  my-5">Until Sunrise is a repeatable game that lasts 24 minutes,spanning 24 in-game hours. From enjoying your
                    </p>
                    <p className="text-[#FFDB00] my-5">
                        <a href="">untilsunrise<span>@gmail.com</span>
                        </a>
                    </p>
                    <div className="w-[50%] h-1 bg-[#FFDB00] my-5"/>
                </div>
                <form action="" className="w-full md:w-[65%]">
                    <div>
                        <div className="flex flex-row gap-5 my-6">
                            <div className="w-[50%]">
                                <label htmlFor="fullname" className="text-[#FFDB00] capitalize text-sm md:text-base lg:text-[16px] font-medium">Fullname:</label><br/>
                                <input value={
                                        formdata.fullname
                                    }
                                    onChange={
                                        (e) => setFormData({
                                            ...formdata,
                                            fullname: e.target.value
                                        })
                                    }
                                    type="text"
                                    name="fullname"
                                    className="px-4 py-2 border-b-2 border-b-[#ffffff3a] text-white bg-[#00000075] w-full text-xs md:text-sm lg:text-base outline-none focus:outline-none"
                                    placeholder="John Doe |"/>
                            </div>
                            <div className="w-[50%]">
                                <label className="text-[#FFDB00] capitalize text-sm md:text-base  lg:text-[16px] font-medium" htmlFor="email">Email:</label><br/>
                                <input value={
                                        formdata.email
                                    }
                                    onChange={
                                        (e) => setFormData({
                                            ...formdata,
                                            email: e.target.value
                                        })
                                    }
                                    type="email"
                                    name="email"
                                    className="px-4 py-2 border-b-2 border-b-[#ffffff3a] text-white bg-[#00000075] w-full text-xs md:text-sm lg:text-base outline-none focus:outline-none"
                                    placeholder="example@gmail.com"/>
                            </div>
                        </div>
                        <div className="flex flex-row gap-5 my-6">
                            <div className="w-[50%]">
                                <label className="text-[#FFDB00] capitalize text-sm md:text-base  lg:text-[16px] font-medium" htmlFor="contact">Contact Phone:</label><br/>
                                <input value={
                                        formdata.phone
                                    }
                                    onChange={
                                        (e) => setFormData({
                                            ...formdata,
                                            phone: e.target.valueAsNumber
                                        })
                                    }
                                    type="phone"
                                    name="phone"
                                    className="px-4 py-2 border-b-2 border-b-[#ffffff3a] text-white bg-[#00000075] w-full text-xs md:text-sm lg:text-base outline-none focus:outline-none"
                                    placeholder="eg: 1123-419-345"/>
                            </div>
                            <div className="w-[50%] ">
                                <label className="text-[#FFDB00] capitalize text-sm md:text-base  lg:text-[16px] font-medium" htmlFor="city">city/town</label><br/>
                                <input value={
                                        formdata.city
                                    }
                                    onChange={
                                        (e) => setFormData({
                                            ...formdata,
                                            city: e.target.value
                                        })
                                    }
                                    type="text"
                                    name="city"
                                    className="px-4 py-2 border-b-2 border-b-[#ffffff3a] text-white bg-[#00000075] w-full text-xs md:text-sm lg:text-base outline-none focus:outline-none"
                                    placeholder="eg: California"/>
                            </div>
                        </div>
                        <div className="w-ful my-2l">
                            <label className="text-[#FFDB00] capitalize text-sm md:text-base  lg:text-[16px] font-medium" htmlFor="feedback">feedback</label><br/>
                            <textarea onChange={
                                    (e) => setFormData({
                                        ...formdata,
                                        feedback: e.target.value
                                    })
                                }
                                name="feedback"
                                className="px-4 py-2 border-b-2 border-b-[#ffffff3a] h-40 text-white bg-[#00000075] w-full text-xs md:text-sm lg:text-base outline-none focus:outline-none"
                                placeholder="Describe your feedback.">
                                {
                                formdata.feedback
                            }</textarea>
                        </div>
                        <button type="submit" className="px-4 py-4 mt-6 bg-[#FFDB00] text-black w-fit text-xs md:text-sm lg:text-base">Submit messages</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
