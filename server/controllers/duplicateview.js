import mongoose from 'mongoose';
import Views from '../models/viewsModel.js'; // Adjust the path as per your project structure
import cron from 'node-cron';

// Function to delete duplicate user views for each post
async function deleteDuplicateUserViewsForPosts() {
  try {
    // Connect to MongoDB


    // Find all unique post IDs
    const uniquePostIds = await Views.distinct('post');

    // Iterate through each unique post ID
    for (const postId of uniquePostIds) {
      // Find all unique user IDs associated with the current post
      const uniqueUserIds = await Views.distinct('user', { post: postId });

      // Delete duplicate user views for the current post
      for (const userId of uniqueUserIds) {
        // Find and delete duplicate user views for the current post
        await Views.deleteMany({ post: postId, user: userId });
      }

      console.log(`Deleted duplicate user views for post ${postId}`);
    }

    // Disconnect from MongoDB
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error deleting duplicate user views:', error);
  }
}
cron.schedule('* * * * *', () => {
    console.log('Running deleteDuplicateUserViewsForPosts cron job...');
    deleteDuplicateUserViewsForPosts();
  });
