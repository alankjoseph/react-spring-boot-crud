package com.alan.springbootbackend.repository;

import com.alan.springbootbackend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Long> {

}
