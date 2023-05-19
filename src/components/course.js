import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import NavigationIcon from '@mui/icons-material/Navigation';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { motion, useMotionValue, useSpring } from "framer-motion";
import { upAnim } from "../config/animation"
import DivideSections from './dividesections';

function Course() {
    // const [showMessage, setShowMessage] = useState(false);

    // useEffect(() => {
    //     // Update the document title using the browser API
    //     console.log(showMessage)
    // }, [showMessage]);

    // const cursorX = useMotionValue(-100);
    // const cursorY = useMotionValue(-100);

    // const springConfig = { damping: 25, stiffness: 700 };
    // const cursorXSpring = useSpring(cursorX, springConfig);
    // const cursorYSpring = useSpring(cursorY, springConfig);

    // useEffect(() => {
    //     const moveCursor = (e) => {
    //         cursorX.set(e.clientX - 16);
    //         cursorY.set(e.clientY - 16);
    //     };

    //     window.addEventListener("mousemove", moveCursor);

    //     return () => {
    //         window.removeEventListener("mousemove", moveCursor);
    //     };
    // }, []);

    return (
        <>
            <DivideSections label="COURSES" />
            <Grid justifyContent="center" container sx={{ p: 3, pb: 25 }}>
                <Grid align="center" item lg={10}>
                    <motion.div style={{ height: "100%" }} variants={upAnim} initial="initial" animate="animate" exit="exit">
                        <Card elevation={16} sx={{ maxWidth: 750 }}>
                            <svg style={{ maxWidth: 400, paddingTop: 30, paddingLeft: 16, paddingRight: 16 }} viewBox="0 0 91 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.05 8.112L7.024 4.056 0 8.112V4.056L7.025 0l7.026 4.056v4.056h-.001z" fill="#A435F0" />
                                <path
                                    d="M0 11.518h3.68v8.941c0 2.31 1.725 3.436 3.345 3.436 1.634 0 3.346-1.156 3.346-3.467v-8.91h3.68v9.154c0 2.128-.669 3.77-2.007 4.896-1.339 1.125-3.011 1.673-5.05 1.673-2.037 0-3.71-.547-5.017-1.673C.669 24.443 0 22.862 0 20.763v-9.245zM45.866 22.63c-1.114.992-2.383 1.478-3.83 1.478-2.64 0-4.41-1.504-4.61-3.833h11.89s.08-.752.08-1.458c0-2.19-.7-4.015-2.13-5.505-1.398-1.49-3.222-2.22-5.443-2.22-2.341 0-4.258.73-5.779 2.22-1.49 1.49-2.25 3.436-2.25 5.87v.12c0 2.403.76 4.319 2.25 5.749 1.49 1.429 3.467 2.159 5.87 2.159 2.794 0 5.017-1.102 6.685-3.002l-2.733-1.578zm-6.994-7.463c.82-.639 1.825-.973 2.95-.973 1.064 0 1.946.334 2.707 1.004.726.61 1.118 1.359 1.152 2.22H37.52c.118-.89.568-1.64 1.353-2.25zM82.91 29.276C81.417 32.801 79.855 34 77.46 34H75.8v-3.262h1.342c.824 0 1.59-.31 2.32-1.994l.73-1.686-6.296-15.54h3.741l4.471 11.192 4.593-11.192h3.74l-7.53 17.758zM28.377 5.649v7.257c-1.206-1.08-3.082-1.723-4.896-1.723-2.16 0-3.984.76-5.474 2.31-1.46 1.521-2.19 3.406-2.19 5.687 0 2.282.73 4.167 2.19 5.718 1.49 1.521 3.315 2.282 5.474 2.282 2.49 0 4.064-.979 4.896-1.746v1.411h3.65V5.65h-3.65zm-1.095 16.878c-.882.882-2.007 1.339-3.315 1.339-1.308 0-2.372-.457-3.254-1.339-.85-.882-1.277-2.007-1.277-3.345 0-1.339.426-2.464 1.277-3.346.882-.882 1.946-1.338 3.254-1.338s2.433.456 3.315 1.338c.912.882 1.37 2.007 1.37 3.346 0 1.338-.458 2.463-1.37 3.345zM68.222 11.214c-2.772 0-4.213 1.15-5.2 2.258-.395-.753-1.507-2.258-4.105-2.258-2.196 0-3.49 1.11-4.136 1.9V11.52h-3.618v15.327h3.618v-8.82c0-2.068 1.278-3.558 2.98-3.558 1.735 0 2.738 1.308 2.738 3.406v8.971h3.619v-8.82c0-2.098 1.246-3.558 3.04-3.558 1.734 0 2.737 1.308 2.737 3.405v8.972h3.65v-9.488c0-3.996-2.148-6.142-5.323-6.142z"
                                    fill="#000" />
                            </svg>
                            <CardContent align="left" sx={{ pt: 3 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Scrum Master Fundamentals 📺
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    This course will give you a quick solid base of what is Agile and Scrum as well as what Scrum Master role is about.
                                    I collected main key points which will be easy to understand and follow. I will also share my personal suggestions
                                    and what to start from. This is great collection of essential basics that everyone should know
                                </Typography>
                            </CardContent>

                            {/* <motion.p  style={{ translateX: cursorXSpring, translateY: cursorYSpring }}>
                            dfdfdfed
                        </motion.p> */}
                            {/*onMouseEnter={() => { setShowMessage(true); }} onMouseLeave={() => { setShowMessage(false); }}*/}
                            <Box sx={{ '& > :not(style)': { m: 1 }, pb: 3 }}>
                                <a style={{ textDecoration: "inherit" }} href="https://www.udemy.com/course/scrum-master-fundamentals/?referralCode=DDB0DDB95B4BC77FF5D7">
                                    <Fab variant="extended" color="primary" aria-label="add">
                                        <NavigationIcon sx={{ mr: 1 }} />
                                        Go To My Udemy Course
                                        <NavigationIcon sx={{ ml: 1 }} />
                                    </Fab>
                                </a>
                            </Box>
                        </Card>
                    </motion.div>
                </Grid>
                <Grid align="center" item lg={10} sx={{ pt: 30 }}>
                    <motion.div style={{ height: "100%" }} variants={upAnim} initial="initial" animate="animate" exit="exit">
                        <Card elevation={16} sx={{ maxWidth: 750 }}>
                            {/* <CardMedia
                                sx={{ height: 500 }}
                                image={process.env.PUBLIC_URL + "/pictures/gumroad.png"}
                                title="green iguana"
                            /> */}
                            <img style={{paddingTop: "20px"}} src={process.env.PUBLIC_URL + "/pictures/gumroad.png"}/>
                            <CardContent align="left" sx={{ pt: 3 }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    Basics Of Scrum 📕
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Do you still wonder what Scrum or Agile are all about? This guide will give you a quick solid base that everyone needs to know.
                                </Typography>
                            </CardContent>

                            {/* <motion.p  style={{ translateX: cursorXSpring, translateY: cursorYSpring }}>
                            dfdfdfed
                        </motion.p> */}
                            {/*onMouseEnter={() => { setShowMessage(true); }} onMouseLeave={() => { setShowMessage(false); }}*/}
                            <Box sx={{ '& > :not(style)': { m: 1 }, pb: 3 }}>
                                <a style={{ textDecoration: "inherit" }} href="https://agilewithaigerim.gumroad.com/l/BasicsOfScrum?layout=profile">
                                    <Fab variant="extended" color="primary" aria-label="add">
                                        <NavigationIcon sx={{ mr: 1 }} />
                                        Go To My Gumroad Course
                                        <NavigationIcon sx={{ ml: 1 }} />
                                    </Fab>
                                </a>
                            </Box>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    );
}

export default Course