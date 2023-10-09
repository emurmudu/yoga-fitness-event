

const ContactUs = () => {

    return (


        <div className=" p-4 hero lg:p-10">
            <div className=" lg:w-3/5 w-4/5  shadow-2xl bg-base-100">
                <h1 className=" text-pink-400 font-bold p-4 lg:p-6 text-center text-lg md:text-2xl lg:text-3xl">Contact Us</h1>
                <form className="card-body ">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="type" name="name" placeholder="Your Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text" >Your Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Feel Free To Write</span>
                        </label>
                        <textarea className="border p-4 input-bordered rounded" name="" id="" cols="20" rows="10" placeholder="Write something ....."></textarea>

                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-secondary">Submit</button>
                    </div>
                </form>
            </div>

        </div>


    );
};

export default ContactUs;