import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Button,
  Container,
  Flex,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SimpleGrid,
} from "@chakra-ui/react";
import { useEthers, useNotifications } from "@usedapp/core";
import NextLink from "next/link";
import React from "react";
import ConnectWallet from "./ConnectWallet";
import Head from "./Head";

// Title text for the various transaction notifications.
const TRANSACTION_TITLES = {
  transactionStarted: "Local Transaction Started",
  transactionSucceed: "Local Transaction Completed",
};

// Takes a long hash string and truncates it.
function truncateHash(hash, length = 38) {
  return hash.replace(hash.substring(6, length), "...");
}

const Layout = ({ children, ...customMeta }) => {
  const { account, deactivate } = useEthers();
  const { notifications } = useNotifications();

  return (
    <>
      <Head {...customMeta} />
      <header>
        <Container maxWidth="container.xl">
          <SimpleGrid
            columns={[1, 1, 1, 2]}
            alignItems="center"
            justifyContent="space-between"
            py="8"
          >
            <Flex py={[4, null, null, 0]}>
              <NextLink href="/" passHref>
                <Link px="4" py="1">
                  Home
                </Link>
              </NextLink>
              <NextLink href="/demo" passHref>
                <Link px="4" py="1">
                  Demo
                </Link>
              </NextLink>
            </Flex>
            {account ? (
              <Flex
                order={[-1, null, null, 2]}
                alignItems={"center"}
                justifyContent={["flex-start", null, null, "flex-end"]}
              >
                <Menu placement="bottom-end">
                  <MenuButton as={Button} ml="4">
                    {truncateHash(account)}
                  </MenuButton>
                  <MenuList>
                    <MenuItem
                      onClick={() => {
                        deactivate();
                      }}
                    >
                      Disconnect
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            ) : (
              <ConnectWallet />
            )}
          </SimpleGrid>
        </Container>
      </header>
      <main>
        <Container maxWidth="container.xl">
          {children}
          {notifications.map((notification) => {
            if (notification.type === "walletConnected") {
              return null;
            }
            return (
              <Alert
                key={notification.id}
                status="success"
                position="fixed"
                bottom="8"
                right="8"
                width="400px"
              >
                <AlertIcon />
                <Box>
                  <AlertTitle>
                    {TRANSACTION_TITLES[notification.type]}
                  </AlertTitle>
                  <AlertDescription overflow="hidden">
                    Transaction Hash:{" "}
                    {truncateHash(notification.transaction.hash, 61)}
                  </AlertDescription>
                </Box>
              </Alert>
            );
          })}
        </Container>
      </main>
    </>
  );
};

export default Layout;