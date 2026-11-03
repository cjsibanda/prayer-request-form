/************************************
* CJ 11/3/2026
* PrayerRequestForm.js
* Has form with name, email, request
*************************************/
export default function PrayerRequestForm() {
    return (
        <section className="form-container">
            <h2>Submit a Request</h2>
            <p>Share what's on your heart...</p>
            <form>
                <div>
                    <label>Full Name</label>
                    <input 
                      type="text"
                      id="name"
                      name="name"
                    />
                </div>

                <div className="form-group">
                    <label>Email Address</label>
                    <input 
                      type="email"
                      id="email"
                      name="email"
                    />
                </div>
            </form>
        </section>
    )
}