import React, { createElement } from "react";
import { useState, useEffect } from 'react';
import { history } from "../../_helpers/history";
import 'bootstrap/dist/css/bootstrap.min.css';

import { CreateKnowledge, FetchKnowledge, SearchKnowLedge } from '../.././API'
import { ConsoleLogger } from "@aws-amplify/core";
import { SearchUserKnowLedge } from "../.././API";
const initialFormState = {
    elementName: 'stupid name',
    type: 'stupid type',
  }

  
  export default class LearningPage extends React.Component {
      formData;
      setFormData;
      constructor(props) {
          super(props);
          
          this.state = {
            error: null,
            isLoaded: false,
            result: [],
            eName: "stupid name",
            eType: "stupid type"
        };
        this.componentWillMount();
    }
    async CreateElement()
    {
        //CreateKnowledge({elementName: this.eName.value, type: this.eType.value})
        CreateKnowledge({elementName: "vl", type: "luon"})
    }

    Find()
    {
        if(!SearchKnowLedge())
                            {
                                this.setState({
                                    isLoaded: true,
                                    result: []
                                    }
                                )
                                console.log("if")
                                return
                            }
                            else
                            {
                                console.log("else")
                                SearchKnowLedge({elementName: "1"})
                                .then(
                                    (result) => {
                                        this.setState({
                                            isLoaded: true,
                                            result: result
                                        });
                                        console.log(this.state.result)
                                    },
                                    (error) => {
                                        // this.setState({
                                        //     isLoaded: true,
                                        //     error
                                        // });
                                    }
                                )

                            }
    }

    searchKnowledge(preference)
    {
        if(!SearchKnowLedge(preference))
                            {
                                this.setState({
                                    isLoaded: true,
                                    result: []
                                    }
                                )
                                console.log("if")
                                return
                            }
                            else
                            {
                                console.log("else")
                                SearchKnowLedge(preference)
                                .then(
                                    (result) => {
                                        this.setState({
                                            isLoaded: true,
                                            result: result
                                        });
                                        console.log(this.state.result)
                                    },
                                    (error) => {
                                        this.setState({
                                            isLoaded: true,
                                            error
                                        });
                                    }
                                )

                            }
    }

    // get current knowledge from course
    componentWillMount() {
    
                            if(!FetchKnowledge())
                            {
                                this.setState({
                                    isLoaded: true,
                                    result: []
                                    }
                                )
                                console.log("if")
                                return
                            }
                            else
                            {
                                console.log("else")
                                FetchKnowledge()
                                .then(
                                    (result) => {
                                        this.setState({
                                            isLoaded: true,
                                            result: result
                                        });
                                        console.log(this.state.result)
                                    },
                                    (error) => {
                                        this.setState({
                                            isLoaded: true,
                                            error
                                        });
                                    }
                                )

                            }

        console.log(this.state.result)
    }
    render() {
        const { error, isLoaded, result , data} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            // console.log("vl luôn")
            // while(!isLoaded)
            
            return <div>LOADING ????????????...</div>


        } else if(!result.length){
            //console.log(result)
            return (
                <div className="">
                    <input
                        onChange={this.handleChange}
                        placeholder="preference"
                        value={data}
                        />   
                </div>
            )
        } else {
            console.log("else last")
            console.log(this.eName)
            //console.log(result)
            return (
                <div className="">

                    <input
                        onChange={this.handleChange}
                        placeholder="preference"
                        value={this.eType}
                    />

                    <button onClick={this.searchKnowledge}>Change preference</button>
                        
                        
                        
                        {result.map(item =>
                            <div className="border">
                            <div>{item.elementName}</div>
                            <div>{item.type}</div>
                            <div>{item.rating}</div>
                            <div>{item.UserID}</div>
                            </div>
                        )}

                    
                </div>
            )
        }

    }
}