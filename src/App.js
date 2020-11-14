import React from 'react';

//redux
import {Provider} from 'react-redux';
import store from './redux/store';

//rsuit
import { 
    Grid,
    Row,
    Col,
 } from 'rsuite';

 //components
 import ActionArea from './components/ActionArea';
 import Screen from './components/Screen';
 import Header from './components/Header';
 import ArrayControl from './components/ArrayControl';

 //scoped styles
 import classes from './styles/app.module.css';

const App = () => {
    return (
        <>
           <Provider store={store} >
               <Grid fluid className={classes.container}>
                   <Row className={classes.main}>
                       <Col className={classes.column}>
                           <ActionArea />
                       </Col>
                       <Col className={classes.column1}>
                            <div style={{
                                width: '100%', height: '33.33%',
                            }}>
                                <Header />
                                <div style={{
                                    width: '100%',
                                    height: '40%',
                                    display: 'flex',
                                    flexDirection: 'row',
                                }}>
                                    <ArrayControl />
                                    <ArrayControl right/>
                                </div>
                            </div>
                            <Screen />
                       </Col>
                   </Row>
               </Grid>
           </Provider>
        </>
    )
}

export default React.memo(App);
