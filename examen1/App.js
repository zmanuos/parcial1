import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, Image } from 'react-native';

const App = () => {
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    email: '',
    phone: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = () => {
    console.log('Datos enviados:', formData);
    setIsSubmitted(true); 
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        
        <Image 
          source={{ uri: 'https://upload.wikimedia.org/wikipedia/en/a/a2/National_Football_League_logo.svg' }} 
          style={styles.image} 
        />
        <Text style={styles.title}>Registro NFLGamePass</Text>
        <TextInput
          style={styles.input}
          placeholder="ID"
          placeholderTextColor="#888"
          value={formData.id}
          onChangeText={(text) => {
              handleInputChange('id', text);
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Nombre"
          placeholderTextColor="#888"
          value={formData.nombre}
          onChangeText={(text) => handleInputChange('nombre', text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#888"
          value={formData.email}
          onChangeText={(text) => handleInputChange('email', text)}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.input}
          placeholder="Teléfono"
          placeholderTextColor="#888"
          value={formData.phone}
          onChangeText={(text) => handleInputChange('phone', text)}
          keyboardType="phone-pad"
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        {isSubmitted && (
          <>
            <Text style={styles.subtitle}>Datos Capturados:</Text>
            <View style={styles.dataContainer}>
              <Text style={styles.dataText}>ID: {formData.id}</Text>
              <Text style={styles.dataText}>Nombre: {formData.nombre}</Text>
              <Text style={styles.dataText}>Email: {formData.email}</Text>
              <Text style={styles.dataText}>Teléfono: {formData.phone}</Text>
            </View>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  formContainer: {
    width: '90%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#ffffff',
    borderRadius: 7,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },

  image: {
    width: 150,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: '300',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  input: {
    height: 50,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
    width: '100%',
  },

  button: {
    backgroundColor: '#333',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },

  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '500',
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '300',
    marginTop: 20,
    marginBottom: 10,
    color: '#333',
  },
  dataContainer: {
    padding: 10,
    alignItems: 'center',
  },
  dataText: {
    fontSize: 16,
    color: '#555',
    marginBottom: 8,
  },

});

export default App;
