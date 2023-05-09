import { NextPage } from "next";

const About: NextPage = () => {
    return (
        <div className="about">
            <div className="biodata section">
                <div className="title">
                    Chirag Ghosh
                </div>
                <div className="subtitle">
                    A final year undergrad at IIT Kharagpur.
                </div>
                <a href="mailto:cghosh828049@gmail.com">
                    Get in touch
                </a>
                <div className="spotify">
                    <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/180MoyXqmazMQGIBu662Jb?utm_source=generator&theme=0" width="100%" height="370" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
            <div className="text section">
                <p>Hello There....</p>
                <p>At the time of writing this, I am exploring the world of algorithms and web development.</p>
                <p>I hate CP although I find DSA intriguing. I find the open source community awesome and starting to contribute in it. In my free time, I binge tech and cooking videos in youtube or watch a tv-series (mostly drama and comedy). I am a huge fan of friends and its the goto spot whenever I do not feel good.</p>
                <p>I love listening to music with choices changing bi-weekly. Though, I am more attached to those songs during JEE days than anything else. I still have that 7.1 GB folder of mixed English-Hindi songs which served me throughout those 2 years. Kinda the reason why Alan Walker is still my fav.</p>
                <p>Oh! I love photography too. Mostly of nature and animals. I feel that whenever I go out to click photos, i move closer to nature, away from my regular table with laptop, keyboa...... you get the idea.</p>
                <p>I love talking to people and listening to their experiences. In this blog, I plan to document my learnings and express other thoughts.</p>
            </div>
        </div>
    )
}

export default About