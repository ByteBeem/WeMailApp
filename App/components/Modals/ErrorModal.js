import React, { memo } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { FONTS } from '../../constants'

const ErrorModal = memo(({ message, isOpen, onClose, onLogin, onSignup }) => {
  return (
    isOpen && (
      <View style={styles.errorModalOverlay}>
        <View style={styles.errorModal}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.errorMessage}>{message}</Text>
          <TouchableOpacity style={styles.button} onPress={onLogin}>
            <Text style={styles.buttonText}>Log in</Text>
          </TouchableOpacity>
          <Text style={styles.orText}>OR</Text>
          <TouchableOpacity style={styles.button} onPress={onSignup}>
            <Text style={styles.buttonText}>Open account</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
});

const styles = StyleSheet.create({
  errorModalOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.897)",
    justifyContent: "center",
    alignItems: "center",
  },
  errorModal: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007bff",
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  closeButton: {
    position: "absolute",
    top: 5,
    right: 5,
    backgroundColor: "transparent",
  },
  closeButtonText: {
    fontSize: 16,
  },
  errorMessage: {
    color: "red",
    fontSize: 18,
    marginTop: 10,
    textAlign: "center",
  },
  orText: {
    ...FONTS.body4,
    color: '#999', 
    textAlign: 'center',
  },
});

export default ErrorModal;
