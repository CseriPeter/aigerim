import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { motion } from "framer-motion";
import { upAnim } from "../config/animation"
import DivideSections from './dividesections';
import "../style/journey.css"

function Journey() {
    const desc = "My name is Aigerim and I am from Kazakhstan. I am Certified Scrum Master, however before I transitioned to this role 3 years ago I experienced multiple technical roles both in Kazakhstan and Hungary in IT engineering field. I believe my Master degree in Computer Science Engineering as well as my technical career path brought me to this Agile world that changed me, my mindset and quickly after became my passion. I am driven by an impact Agile transformation and its implementation brings to the teams when applied correctly.  I find motivation in building healthy, organized, well performing and self-motivated teams."

    return (
        <>
            <DivideSections label="MY JOURNEY" description={desc} />
            <Grid justifyContent="center" container spacing={8} sx={{ p: 3 }}>
                <Grid item align="center" md={4}>
                    <motion.div style={{ height: "100%" }} variants={upAnim} initial="initial" animate="animate" exit="exit">
                        <Card elevation={16} align="center" sx={{ maxWidth: 750 }}>
                            <List sx={{ pb: 3, maxWidth: 500, bgcolor: 'background.paper' }}>
                                <Divider sx={{ pt: 3 }}><b>WORK EXPERIENCE</b></Divider>
                                <div className="work">
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Ericsson - Scrum Master" secondary="May 2022 - Present" />
                                    </ListItem>
                                    <Divider variant="middle" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="ExxonMobil - Scrum Master" secondary="August 2021 - May 2022" />
                                    </ListItem>
                                    <Divider variant="middle" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="ExxonMobil - SharePoint Support Engineer" secondary="August 2019  - August 2021" />
                                    </ListItem>
                                    <Divider variant="middle" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="ExxonMobil - Intern SharePoint Support Engineer" secondary="Dec 2018 - September 2019" />
                                    </ListItem>
                                    <Divider variant="middle" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="System Administrator - National Information Technologies" secondary="September 2016 - August 2017" />
                                    </ListItem>
                                </div>
                                <Divider sx={{ pt: 3 }}><b>EDUCATION</b></Divider>
                                <div className="education">
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <SchoolIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="University of Pecs - Master degree in Computer Science Engineering" secondary="September 2017 - June 2019" />
                                    </ListItem>
                                    <Divider variant="middle" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <SchoolIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Eurasian Natioanal University named after L.N.Gumilyev - Bachelor in Engineering and Technology" secondary="September 2012 - June 2016" />
                                    </ListItem>
                                </div>
                                <Divider sx={{ pt: 3 }}><b>CERTIFICATION</b></Divider>
                                <div className="certification">
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkspacePremiumIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Certified ScrumMaster" secondary="Scrum Alliance" />
                                    </ListItem>
                                    <Divider variant="middle" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkspacePremiumIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Certified SAFe 5 Agilist" secondary="Scaled Agile Framework (SAFe)" />
                                    </ListItem>
                                    <Divider variant="middle" />
                                    <ListItem>
                                        <ListItemAvatar>
                                            <Avatar>
                                                <WorkspacePremiumIcon />
                                            </Avatar>
                                        </ListItemAvatar>
                                        <ListItemText primary="Certified SAFe 6 Advanced Scrum Master" secondary="Scaled Agile Framework (SAFe)" />
                                    </ListItem>
                                </div>
                            </List>
                        </Card>
                    </motion.div>
                </Grid>
            </Grid>
        </>
    )
}

export default Journey;