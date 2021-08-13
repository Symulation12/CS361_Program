import React from 'react';
import ArticleList from '../components/articleList';
import Sidebar from '../components/sidebar';


const testSources = ["https://majorspoilers.com/category/critical-hit/feed", "http://critrole.nerdistind.libsynpro.com/rss"]

export default function MainPage ()
{
    return (
        <div id="layout">
            <Sidebar sources={testSources}/>
            <ArticleList sources={testSources}/>
        </div>
    );
}