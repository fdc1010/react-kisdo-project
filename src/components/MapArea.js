import React, { Component } from 'react';

class MapArea extends Component {
    render() {
        return (
            <div class="map fix" style={{background: "#f5f5f5"}}>
                <div class="container-flud">
                    <div class="row">
                        <div class="col-lg-12">
                        <div dangerouslySetInnerHTML={{ __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2484.4180721763532!2d-0.1501785!3d51.4871951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876051a36911559%3A0x57e6d7d9e19b143!2sBright%20Horizons%20Chelsea%20Day%20Nursery%20and%20Preschool!5e0!3m2!1sen!2suk!4v1688069377202!5m2!1sen!2suk" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>` }} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MapArea;