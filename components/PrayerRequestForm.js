/************************************
* CJ 11/4/2026
* PrayerRequestForm.js
* has form with name, email, request
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
                      required
                      minLength="2"
                    />
                </div>

                <div className="form-group">
                    <label>City:</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
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

                <div className="form-group">
                    <label htmlFor="category">Prayer Category</label>
                    <select id="category" name="category">
                        <option value="">Select a category</option>
                        <option value="health">Health and Healing</option>
                        <option value="family">Family</option>
                        <option value="finances">Financial Needs</option>
                        <option value="guidance">Guidance and Direction</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="request">Your Prayer Request</label>
                    <textarea 
                      id="request"
                      name="request"
                      rows="5"
                    />
                </div>

                <button type="submit">
                    Submit Prayer Request
                </button>
            </form>
        </section>
    )
}