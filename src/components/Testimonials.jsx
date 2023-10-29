// import ICONS from "./icons"

const Testimonials = () => {
    return (
        <>
            <div className={"testimonials"}>
                <h3>
                    Parents rate AllRight “Excellent” on Trustpilot
                </h3>
                <div className="t-block-start">

                </div>
                <div className="t-block">
                    <div className="text">
                        <h5>The child really likes it! </h5>
                        <p>We attend both individual lessons and group conversation clubs (3-6 children at a time). Lessons in a fun way. Highly recommend.</p>
                    </div>
                    <div className="author-block">
                        <div className="author-photo">
                            <img src="assets/icons/author.png"/>
                        </div>
                        <div>
                            <div className="author-name">Raluca and Sara</div>
                            <div className="author-rating">
                                {[...new Array(5)].map((item, i) => (
                                    <span key={i}><img src="assets/icons/start.svg"/></span>
                                ))}
                            </div>

                        </div>
                    </div>

                </div>
                <div className="t-block-end">

                </div>
            </div>
        </>
    )
}

export default Testimonials