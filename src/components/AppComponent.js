import React, { Component } from 'react'
import { default as GrommetApp } from 'grommet/components/App'
import Split from 'grommet/components/Split'
import Anchor from 'grommet/components/Anchor'
import Sidebar from 'grommet/components/Sidebar'
import Header from 'grommet/components/Header'
import Title from 'grommet/components/Title'
import Menu from 'grommet/components/Menu'
import Box from 'grommet/components/Box'
import Footer from 'grommet/components/Footer'
import Button from 'grommet/components/Button'
import Article from 'grommet/components/Article'
import Section from 'grommet/components/Section'
import User from 'grommet/components/icons/base/User'

export default class AppComponent extends Component {
  componentDidMount () {
  }

  render () {
    return (
      <GrommetApp centered={false}>
        <Split flex='right'
          separator={true}>
          <Sidebar colorIndex='neutral-4'
            fixed={false}
            size='small'>
            <Header pad='medium'
              justify='between'>
              <Title>
                Title
              </Title>
            </Header>
            <Box flex='grow'
              justify='start'>
              <Menu primary={true}>
                <Anchor href='#'
                  className='active'>
                  First
                </Anchor>
                <Anchor href='#'>
                  Second
                </Anchor>
                <Anchor href='#'>
                  Third
                </Anchor>
              </Menu>
            </Box>
            <Footer pad='medium'>
              <Button icon={<User />}/>
            </Footer>
          </Sidebar>
          <Article
            direction='column'
            pad='none'>
            <Box direction='column' pad='none'>
              <Header fixed={false}
                float={false}
                splash={false}>
                <Title>
                  Sample Title
                </Title>
                <Box flex={true}
                  justify='end'
                  direction='row'
                  responsive={false}>
                  <Menu
                    dropAlign={{"right": "right"}}>
                    <Anchor href='#'
                      className='active'>
                      First
                    </Anchor>
                    <Anchor href='#'>
                      Second
                    </Anchor>
                    <Anchor href='#'>
                      Third
                    </Anchor>
                  </Menu>
                </Box>
              </Header>
              <Section full="horizontal" pad="none">
              asdasd
              </Section>
            </Box>
          </Article>
        </Split>
      </GrommetApp>
    )
  }
}