const { db } = require('./firebase.js');

exports.handler = async (event) => {
    const id = event.pathParameters.id;
    const docRef = db.collection('company').doc(id);
    const doc = await docRef.get();

    if (!doc.exists) {
        return {
            statusCode: 404,
            body: 'Documento no encontrado'
        };
    }

    return {
        statusCode: 200,
        body: JSON.stringify(doc.data())
    };
};