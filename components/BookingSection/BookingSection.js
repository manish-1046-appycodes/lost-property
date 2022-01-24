const BookingSection = ({alt}) => {
    return (
        <div className={`booking  ${ alt == 'alt' ? 'py-40' : 'py-20 min-h-screen'} flex items-center`}>
            <div className="container">
                <div className="max-w-1430px mx-auto">
                    <div className="md:flex">
                        <div className="md:w-1/2 flex">
                            <h2 className="heading-brand-medium inline-block">Stay <br/>a <em>while</em></h2>
                        </div>
                        <div className="md:w-1/2 flex items-center justify-center">
                            <p className="font-bold">FORM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingSection
