import React, { FC } from 'react';
import './CommunityBlogs.css';
import TitleTag from '@/components/TitleTag/TitleTag';
import PersonBlogs from '@/components/PersonBlogs/PersonBlogs';
import Image from 'next/image';
import StatsCard from '@/components/StatsCard/StatsCard';
import { PersonBlogsData1,PersonBlogsData2,PersonBlogsData3 } from '@/utils/data';

const CommunityBlogs: FC = () => {
    return (
        <div className='communityblogs-container desktop-width'>
            <TitleTag title='Our Stonelab team' />
            <h2 className='communityblog-heading'>We are proud members of Stonelab community</h2>
            <section className='community-Grid'>
                <div className='communityBlog-cellOne'>
                    JS & TS
                    Core Contributors Commuity
                </div>
                <PersonBlogs
                {...PersonBlogsData1}
                />
                <StatsCard />
                <PersonBlogs 
                {...PersonBlogsData2}
                />
                <div className='communityBlog-cellFive'>
                    <Image
                        src={'/meta.svg'}
                        alt='metalogo'
                        height={100}
                        width={100}
                    />

                </div>
                <PersonBlogs
                {...PersonBlogsData3}
                />
            </section>
        </div>
    )
}

export default CommunityBlogs;