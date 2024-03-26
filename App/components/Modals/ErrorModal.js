import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ErrorModal = ({ Message, isOpen, onClose }) => {
  return (
    isOpen && (
      <View style={styles.errorModalOverlay}>
        <View style={styles.errorModal}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <Text style={styles.closeButtonText}>X</Text>
          </TouchableOpacity>
          <Text style={styles.errorMessage}>{Message}</Text>
          <TouchableOpacity style={styles.okButton} onPress={onClose}>
            <Text style={styles.okButtonText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  );
};

const styles = StyleSheet.create({
  errorModalOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
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
  okButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#007bff",
    borderRadius: 5,
    marginTop: 10,
  },
  okButtonText: {
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
});

export default ErrorModal;
