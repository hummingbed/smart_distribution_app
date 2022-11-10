const TrackerComponent = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1;
    let dd = today.getDate();

    const date = `${dd}/${mm}/${yyyy}`;
    return (
        <div className="tracker">
            <div className="tracking-number">
                <p>Tracking Number</p>
                <h5>#22445678676</h5>
            </div>

            <div className="delivery-date">
                <p>Delivery date</p>
                <h5>{date}</h5>
            </div>
        </div>
    );
}
export default TrackerComponent;