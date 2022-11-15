function UserList(navigation) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>User List Screen</Text>
        <Button
        title="Go to Details"
        onPress={() => {
          navigation.navigate('Details', {
          });
        }}
      />
      </View>
    );
}