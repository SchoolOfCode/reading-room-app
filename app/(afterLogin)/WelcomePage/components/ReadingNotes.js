// Box showing latest reading notes from logged in user

'use client';

import { Text, Icon, HStack, Box } from '@chakra-ui/react';
import { FaQuoteRight, FaQuoteLeft } from 'react-icons/fa';
import styles from '../welcomePage.module.css';

export default function ReadingNotes({ title, author, notes }) {
  return (
    <div className={styles.pageWrapper}>
      <HStack>
        <Icon as={FaQuoteLeft} color='#1f1f1f' boxSize={30} />
        <Text m={'1rem'} border='0' fontSize='2xl'>
          {title ? (
            <>
              Last time you read <span style={{ fontWeight: 'bold' }}>{title}</span> by{' '}
              <span style={{ fontWeight: 'bold' }}>{author}</span>. You wrote: "
              <span style={{ fontWeight: 'bold' }}>{notes}</span>" - keep going, you're doing great!
            </>
          ) : (
            'Your reading notes will be displayed here'
          )}
        </Text>
        <Icon as={FaQuoteRight} color='#1f1f1f' boxSize={30} />
      </HStack>
    </div>
  );
}
