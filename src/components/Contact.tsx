// import React from 'react';

export default function Contact() {
  return (
    <div>
      <div>
        <h1>Contact us</h1>
        <p>Send us message</p>
      </div>

      <div>
        <form action="">
            <div>
                <p>Let's Get in <span>Touch</span></p>
                <p>Until Sunrise is a repeatable game that lasts 24 minutes,spanning 24 in-game hours. From enjoying your </p>
                <p><a href="">untilsunrise<span>@gmail.com</span></a></p>
            </div>


            <div>
                <div>
                    <div>
                        <label htmlFor="fullname">Fullname:</label>
                        <input type="text" name="fullname" placeholder="John Doe |"/>
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" placeholder="example@gmail.com" />
                    </div>

                    <div>
                        <label htmlFor="contact">Contact Phone:</label>
                        <input type="phone" name="phone" placeholder="eg: 1123-419-345" />
                    </div>

                    <div>
                        <label htmlFor="city">city/town</label>
                        <input type="text" name="city" placeholder="eg: California" />
                    </div>
                </div>

                <div>
                    <label htmlFor="feedback">feedback</label>
                    <input type="text" name="feedback" placeholder="Describe your feedback." />
                </div>

                <div>
                    <button type="submit">Submit messages</button>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
}
