import React from 'react'
import { Container, Grid } from 'semantic-ui-react'
import { FormattedMessage } from 'react-intl'

import Contact from '../../components/Contact'

const contacts = [
  {
    name: 'SARL Bonnevial',
    email: 'contact@sarlbonnevial.fr',
    phone: '06.32.08.60.25 / 06.78.70.09.29'
  },
]

const Contacts = () => (
  <Container className="contacts inner">
    <h2 className="headline">
      <FormattedMessage id="contact.title" />
    </h2>
    <Grid className="contacts-list" columns={contacts.length} divided>
      {contacts.map(contact => (
        <Contact
          key={contact.email}
          name={contact.name}
          email={contact.email}
          phone={contact.phone}
        />
      ))}
    </Grid>
  </Container>
)

export default Contacts
