import React from "react";
import {Grid, Link, Paper, Typography} from "@mui/material";
import Icon from "@mdi/react";
import { mdiTwitch, mdiTwitter } from "@mdi/js";
import DiscordIcon from "../../icons/DiscordIcon";

const HellfireFooter = () => {
    return (
        <React.Fragment>
            <Paper sx={{
                borderRadius: 0,
                paddingBottom: 1
            }} elevation={3}>
                <Grid container spacing={2}>
                    <Grid item xs={1}></Grid>
                    <Grid item container xs={3} spacing={2}>
                        <Grid item>
                            <Link href={"https://twitch.tv/hellfiretools"} target={"_blank"} rel={"noopener"} color={"inherit"} underline={"none"}>
                                <Icon path={mdiTwitch} style={{
                                    width: 32
                                }}/>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={"https://discord.gg/4e3ugKAawz"} target={"_blank"} rel={"noopener"} color={"inherit"} underline={"none"}>
                                <span style={{
                                    width: 32
                                }}>
                                    <DiscordIcon  />
                                </span>
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href={"https://twitter.com/usehellfire"} target={"_blank"} rel={"noopener"} color={"inherit"} underline={"none"}>
                                <Icon path={mdiTwitter} style={{
                                    width: 32
                                }}/>
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}></Grid>
                    <Grid item xs={4}></Grid>
                    <Grid item xs={1}></Grid>
                </Grid>
            </Paper>
            <Paper sx={{
                borderRadius: 0
            }}>
                <Typography
                    variant="body2"
                    noWrap
                    sx={{
                        mr: 2,
                        display: { xs: 'none', md: 'flex' },
                        fontFamily: 'monospace',
                        color: 'inherit',
                        textDecoration: 'none',
                        textAlign: 'center'
                    }}
                >
                    Copyright &copy; HELLFIRE {new Date().getFullYear()}
                </Typography>
            </Paper>
        </React.Fragment>
    )
}

export default HellfireFooter;