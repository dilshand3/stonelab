import React, { FC } from 'react';
import './CommunityBlogs.css';
import TitleTag from '@/components/TitleTag/TitleTag';
import PersonBlogs from '@/components/PersonBlogs/PersonBlogs';
import Image from 'next/image';
import StatsCard from '@/components/StatsCard/StatsCard';

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
                <PersonBlogs />
                <StatsCard />
                <PersonBlogs />
                <div className='communityBlog-cellFive'>
                    <Image
                        src={'/meta.svg'}
                        alt='metalogo'
                        height={100}
                        width={100}
                    />

                </div>
                <PersonBlogs />
            </section>
        </div>
    )
}

export default CommunityBlogs;