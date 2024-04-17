#1

Switch JWT method from decode to verify. Decode method will not verify token if a user has tampered it.

#2

Accepted empty username upon registration. Add validation to verify if username or password is empty upon registration

#3

Cannot update username due to being unauthorized. Allowing user to authenticate properly.