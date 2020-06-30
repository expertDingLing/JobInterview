import React, { Component } from "react";
import { Link } from 'react-router-dom';

class PageHeader extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let title = " Services";
        return (
            <section class="trusted-area breadcrumb-area text-center">
                <div class="trusted-fluid">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="trusted-content">
                                    <div class="trusted__title">
                                        <h1>{this.props.setDay}</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default PageHeader;