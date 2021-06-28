import React from 'react';
import Layout from '@theme/Layout';
import AuthorSection from './AuthorSection';
import SkillSection from './SkillSection';

function AboutPage() {
  return (
    <Layout title="About">
        <AuthorSection />        
        <SkillSection />
    </Layout >
  );
}

export default AboutPage;