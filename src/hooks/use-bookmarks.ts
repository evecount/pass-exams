
'use client';

import { useMemoFirebase, useUser, useFirestore, useCollection, setDocumentNonBlocking, deleteDocumentNonBlocking } from '@/firebase';
import { collection, doc, serverTimestamp } from 'firebase/firestore';

export function useBookmarks() {
  const { user } = useUser();
  const firestore = useFirestore();

  const bookmarksCollectionRef = useMemoFirebase(
    () => (user ? collection(firestore, 'users', user.uid, 'bookmarkedQuestions') : null),
    [firestore, user]
  );
  
  const { data: bookmarks, isLoading, error } = useCollection<{
    quizId: string;
    questionId: string;
    createdAt: any;
  }>(bookmarksCollectionRef);

  const addBookmark = (quizId: string, questionId: string) => {
    if (!user) return;
    const bookmarkRef = doc(firestore, 'users', user.uid, 'bookmarkedQuestions', questionId);
    const data = { quizId, questionId, createdAt: serverTimestamp() };
    
    // Use non-blocking write to prevent client-side auth race conditions
    setDocumentNonBlocking(bookmarkRef, data, { merge: true });
  };

  const removeBookmark = (questionId: string) => {
    if (!user) return;
    const bookmarkRef = doc(firestore, 'users', user.uid, 'bookmarkedQuestions', questionId);
    
    // Use non-blocking delete
    deleteDocumentNonblocking(bookmarkRef);
  };

  return { bookmarks, addBookmark, removeBookmark, isLoading, error };
}
