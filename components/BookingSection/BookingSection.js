import { useState, useEffect, useRef } from "react";

import { DateRange } from 'react-date-range';
import { addDays } from 'date-fns';

import DatePickerSvg from "../../public/image/icon/datepicker.svg";
import GuestsSvg from "../../public/image/icon/guests.svg";
import CrossSvg from "../../public/image/icon/cross.svg";

const dateNow = () => {
        
    const date = new Date();
    const dateFormatted = date.getDate()+'/'+(date.getMonth() + 1)+'/'+date.getFullYear();

    return dateFormatted;
}

const dateNowForm = () => {
        
    const date = new Date();
    const startYear = date.getFullYear();
    const startMonth = ("0" + (date.getMonth() + 1)).slice(-2)
    const startDay = ("0" + date.getDate()).slice(-2)

    return startYear+'-'+startMonth+'-'+startDay;
}

const dateTomorrow = () => {
        
    const date = new Date( Date.now()+ (3600 * 1000 * 24) );
    const dateFormatted = date.getDate()+'/'+(date.getMonth() + 1)+'/'+date.getFullYear();

    return dateFormatted;
}

const dateTomorrowForm = () => {
        
    const date = new Date(Date.now()+ (3600 * 1000 * 24));
    const startYear = date.getFullYear();
    const startMonth = ("0" + (date.getMonth() + 1)).slice(-2)
    const startDay = ("0" + date.getDate()).slice(-2)

    return startYear+'-'+startMonth+'-'+startDay;
}



const BookingSection = () => {

    const [state, setState] = useState([
        {
          startDate: new Date(),
          endDate: addDays(new Date(), 1),
          key: 'selection'
        }
    ]);

    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [room, setRoom] = useState(1);

    const [datePickerPopup, setDatePickerPopup] = useState(false);
    const [checkin, setCheckin] = useState(dateNow);
    const [checkout, setCheckout] = useState(dateTomorrow);

    const [formStartDate, setFormStartDate] = useState(dateNowForm);
    const [formEndDate, setFormEndDate] = useState(dateTomorrowForm);



    useEffect( () => {
        const startDate = new Date(state[0].startDate);
        const endDate = new Date(state[0].endDate);

        
        setCheckin(startDate.getDate()+'/'+(startDate.getMonth() + 1)+'/'+startDate.getFullYear());
        setCheckout(endDate.getDate()+'/'+(endDate.getMonth() + 1)+'/'+endDate.getFullYear());

        const startYear = startDate.getFullYear();
        const startMonth = ("0" + (startDate.getMonth() + 1)).slice(-2)
        const startDay = ("0" + startDate.getDate()).slice(-2)
        
        setFormStartDate(startYear+'-'+startMonth+'-'+startDay);

        const endYear = endDate.getFullYear();
        const endMonth = ("0" + (endDate.getMonth() + 1)).slice(-2)
        const endDay = ("0" + endDate.getDate()).slice(-2)
        
        setFormEndDate(endYear+'-'+endMonth+'-'+endDay);

    }, [state]);


    const onChangeDatePicker = (item) => {
        setState([item.selection]);

        if (item.selection.endDate !== item.selection.startDate) {

            setTimeout(function() {
                setDatePickerPopup(false);
            }, 750);
        }
    }

    const toggleDatePickerPopup = (e) => {
        e.preventDefault();

        setDatePickerPopup( datePickerPopup => !datePickerPopup);
    }
    

    const minusNumAdults = (el) => {
        if ( adults > 1 ) {
            setAdults(adults - 1)
        }
    }
    const plusNumAdults = (el) => {
        setAdults(adults + 1)
    }

    const minusNumchildren = (el) => {
        if ( children > 0 ) {
            setChildren(children - 1)
        }
    }
    const plusNumChildren = (el) => {
        setChildren(children + 1)
    }

    const minusNumRoom = (el) => {
        if ( room > 1 ) {
            setRoom(room - 1)
        }
    }
    const plusNumroom = (el) => {
        setRoom(room + 1)
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        let openURL = 'https://www.hilton.com/en/book/reservation/rooms/?ctyhocn=LONCCQQ';
        openURL += '&arrivalDate='+formStartDate;
        openURL += '&departureDate='+formEndDate;
        openURL += '&room1NumAdults='+adults;

        if ( room ) {
            for (let index = 1; index < room; index++) {
                openURL += '&room'+(index + 1)+'NumAdults=1';
            }
        }

        if ( children ) {
            for (let index = 0; index < children; index++) {
                openURL += '&room'+(index + 1)+'NumChildren=1';
            }
        }

        window.open(openURL, "_blank");

        
    }

    
    
    return (
    <div className="bg-cream-1  min-vh100 w-full top-0 left-0 z-10 flex items-center py-20">
            <div className="container">
                <div className="max-w-1430px mx-auto">
                    <div className="md:flex">
                        <div className="md:w-1/2 md:flex">
                            <h3 className="heading-brand-medium block mb-10 text-center"><div className="inline-block text-left">Stay <br className="hidden md:block"/><em>a while</em></div></h3>
                        </div>
                        <div className="md:w-1/2">

                            <form className={`form`}>
                                <div className="form-group form-group--border relative">
                                    <label className="uppercase block" htmlFor='enquiry'>CHECK-IN - CHECK-OUT</label>
                                    <div className="flex space-x-4 lg:space-x-5">
                                        <div className="w-[25px]">
                                            <DatePickerSvg/>
                                        </div>
                                        <div className="field cursor-pointer select-none" onClick={toggleDatePickerPopup}>
                                            <span id="checkin">{checkin}</span> - <span id="checkout">{checkout}</span>
                                        </div>
                                    </div>

                                    <div 
                                    className={` ${ datePickerPopup ? 'visible opacity-100 ' : 'opacity-0 invisible delay-250'} ease-in-out transition-[visibility,opacity] duration-250 fixed top-0 left-0 pt-[70px] lg:pt-[150px] h-full w-full flex items-end z-50`}>

                                        <div onClick={toggleDatePickerPopup} className="absolute bg-blue-1/50 inset-0"></div>
                                        
                                        <div className={`relative w-full flex flex-col lg:flex-row-reverse  ease-in-out transition-transform ${ datePickerPopup ? 'translate-y-0 delay-250' : 'translate-y-full delay-0'} `}>
                                            
                                            <button onClick={toggleDatePickerPopup} aria-hidden className="flex space-x-5 bg-blue-1 text-white p-5 text-center justify-center items-center uppercase"><span>close</span><CrossSvg/> </button>

                                            <DateRange
                                            updateRange={() => alert()}
                                            onChange={onChangeDatePicker}
                                            moveRangeOnFirstSelection={false}
                                            months={2}
                                            ranges={state}
                                            direction="horizontal"
                                            rangeColors={['#000000', '#3ecf8e', '#fed14c']}
                                            minDate={addDays(new Date(), -0)}

                                            />
                                        </div>
                                    </div>

                                </div>

                                <div className="form-group form-group--border">
                                    
                                    <label className="uppercase block" htmlFor='enquiry'>Guests</label>
                                    
                                    <div className="flex space-x-4 lg:space-x-5 ">
                                        <div className="shrink-0 w-[25px]">
                                            <GuestsSvg className=""/>
                                        </div>
                                        <div className="flex-1 flex justify-between max-w-lg space-x-10">
                                            <div>
                                                <p className="mb-3">Adults</p>
                                                <div className="flex num-wrap">
                                                    <div onClick={minusNumAdults} className="num-control num-minus">-</div>
                                                    <input className="num" readOnly value={adults}/>
                                                    <div onClick={plusNumAdults} className="num-control num-plus">+</div>
                                                </div>
                                            </div>

                                            <div>
                                                <p className="mb-3" htmlFor='enquiry'>Children</p>
                                                <div className="flex num-wrap">
                                                    <div onClick={minusNumchildren} className="num-control num-minus">-</div>
                                                    <input className="num" readOnly value={children}/>
                                                    <div onClick={plusNumChildren} className="num-control num-plus">+</div>
                                                </div>
                                            </div>

                                            <div>
                                                <p className="mb-3" htmlFor='enquiry'>Room</p>
                                                <div className="flex num-wrap">
                                                    <div onClick={minusNumRoom} className="num-control num-minus">-</div>
                                                    <input className="num" readOnly value={room}/>
                                                    <div onClick={plusNumroom} className="num-control num-plus">+</div>
                                                </div>
                                            </div>

                                            
                                        </div>
                                    </div>

                                </div>

                                <div className="flex form-group">
                                    <label className="flex fake-radio !m-0" htmlFor="similar">
                                        <input className="absolute" name="similar" type="checkbox" id="similar"/>
                                        <span className="mr-4 lg:mr-5 border border-black w-[19px] h-[19px] rounded-full lg:w-[25px] lg:h-[25px]">
                                            <span></span>
                                        </span>
                                        <p>Show similar rooms</p>
                                    </label>
                                </div>
                                
                                <button className="button-tertiary" type='submit' onClick={(e)=>{handleSubmit(e)}}>Check Availability</button>

                                <p className="text-[9px] lg:text-[12px] text-center mt-5">Bookings for Lost Property are managed by Hilton.</p>
                            </form >

                            

                        </div>
                    </div>
                </div>
            </div>
    </div>
    );
};

export default BookingSection;