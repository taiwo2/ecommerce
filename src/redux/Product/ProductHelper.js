import { firestore } from "../../firebase/utils";

export const handleAddProducts = (product) => {
  return new Promise((resolve,reject) => {
    firestore
    .collection('products')
    .doc()
    .set(product)
    .then(() => {
      resolve()
    })
    .catch((err) => {
      reject(err)
    })
  })
}

export const handleFetchProduct = ({filterType, startAfterDocs, persistproducts=[]}) => {
  return new Promise((resolve,reject) => {
    const pageSize = 6;
    let ref = firestore.collection('products').orderBy('createdDate').limit(pageSize)
    if (filterType) ref = ref.where('productCategory', '==',filterType)
    if(startAfterDocs) ref = ref.startAfter(startAfterDocs)
    ref
      .get()
      .then(snapshot => {
        const totalCount = snapshot.size
        const data = [
          ...persistproducts,
          ...snapshot.docs.map(doc => {
          return {
            ...doc.data(),
            documentId: doc.id
          }
        })
      ];
        resolve({
          data,
          queryDoc: snapshot.docs[totalCount - 1],
          isLastPage: totalCount < 1,
        })
      })
      .catch(err =>{
        reject(err)
      })
  })
}

export const handleDeleteProduct = documentID => {
  return new Promise((resolve,reject) => {
    firestore
    .collection('products')
    .doc(documentID)
    .delete()
    .then(() => {
      resolve()
    })
    .catch(() => {
      reject()
    })
  });
}

export const handleFetchProducts = (productID) => {
  new Promise((resolve,reject)  => [
    firestore
      .collection('product')
      .doc(productID)
      .get()
      .then(snapshot => {
        if (snapshot.exist) {
          resolve(snapshot.data)
        }
      })
      .catch(err=> {
        reject(err)
      })
  ])
}