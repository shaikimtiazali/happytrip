import React from 'react';




const FlightList = ({ list }) => {

    return (
        <div className="" style={{ marginRight: '200px' }}>
            <h1>Flight Details</h1>
            <div>
                {list.map((item) =>

                    <>
                        <table class="table table-striped"  >
                            <thead>
                                <tr>
                                    <th>Arrivl Time</th>
                                    <th>Date</th>
                                    <th>Departure Time</th>
                                    <th>Destination</th>
                                    <th>FlightNo</th>
                                    <th>Name</th>
                                    <th>Origin</th>
                                    <th>Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> {item.arrivalTime}</td>
                                    <td>{item.date}</td>
                                    <td>{item.departureTime}</td>
                                    <td>{item.destination}</td>
                                    <td>{item.flightNo}</td>
                                    <td>{item.name}</td>
                                    <td>{item.origin}</td>
                                    <td>{item.price}</td>
                                    <a href="/BookFlight"><td> <button type="button" class="btn btn-primary" >Book</button></td></a>
                                </tr>
                            </tbody>
                        </table>
                    </>
                )
                }))
            </div>


        </div >
    );
}

export default FlightList;