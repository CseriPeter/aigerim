import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import { motion } from "framer-motion";
import { leftAnim, rightAnim, upAnim } from "../config/animation"
import DivideSections from './dividesections';
import Carousel from './carousel'

function Certifications() {

    return (
        <>
            <DivideSections label="CERTIFICATIONS" />
            {/* <Grid container justifyContent="center" spacing={8} sx={{ p: 3, pb: 25 }}>
                <Grid item align="right" md={4}>
                    <motion.div style={{ height: "100%" }} variants={leftAnim} initial="initial" animate="animate" exit="exit">
                        <Card elevation={16} align="center" sx={{ height: "100%", maxWidth: 500 }} >
                            <img src={process.env.PUBLIC_URL + "/pictures/graduation.jpg"} style={{
                                margin: "40px 0",
                                borderRadius: "4px"
                            }} />
                        </Card>
                    </motion.div>
                </Grid>
                <Grid align="left" item md={4}>
                    <motion.div style={{ height: "100%" }} variants={rightAnim} initial="initial" animate="animate" exit="exit">
                        <Card elevation={16} align="center" sx={{ height: "100%", maxWidth: 500 }}>
                            <CardMedia
                                sx={{ height: 224, width: 221 }}
                                image={process.env.PUBLIC_URL + "/pictures/certification logo.jpg"}
                                title="green iguana"
                            />
                            <CardMedia
                                sx={{ height: 268, width: 350 }}
                                image={process.env.PUBLIC_URL + "/pictures/certificate.png"}
                                title="green iguana"
                            />
                        </Card>
                    </motion.div>
                </Grid>
            </Grid> */}
            <Grid container justifyContent="center" sx={{ p: 3, pb: 25 }}>
                <Grid item sx={12}>
                    <motion.div style={{ height: "100%" }} variants={upAnim} initial="initial" animate="animate" exit="exit">
                        <Carousel />
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}

export default Certifications